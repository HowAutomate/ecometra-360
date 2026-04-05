import { useState } from "react";
import { useSubmissions, Submission, CustomWork } from "@/contexts/SubmissionsContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Plus, Trash2, ClipboardList, Users, Briefcase, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "payal.pandey@ecometra360.com";
const ADMIN_PASSWORD = "payalpandey4u";

const statusColors: Record<string, string> = {
  new: "bg-blue-500/10 text-blue-600 border-blue-200",
  "in-progress": "bg-yellow-500/10 text-yellow-600 border-yellow-200",
  done: "bg-green-500/10 text-green-600 border-green-200",
};

const Admin = () => {
  const [authed, setAuthed] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const { submissions, addSubmission, updateSubmission, deleteSubmission } = useSubmissions();
  const [customOpen, setCustomOpen] = useState(false);
  const [customForm, setCustomForm] = useState({ title: "", description: "", priority: "medium" as "low" | "medium" | "high" });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.email === ADMIN_EMAIL && loginForm.password === ADMIN_PASSWORD) {
      setAuthed(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  const handleAddCustom = () => {
    if (!customForm.title.trim()) return;
    const work: CustomWork = {
      id: crypto.randomUUID(),
      type: "custom",
      title: customForm.title,
      description: customForm.description,
      priority: customForm.priority,
      status: "new",
      assignedTo: "",
      createdAt: new Date().toISOString(),
    };
    addSubmission(work);
    setCustomForm({ title: "", description: "", priority: "medium" });
    setCustomOpen(false);
  };

  const quotes = submissions.filter((s) => s.type === "quote");
  const freelancers = submissions.filter((s) => s.type === "freelancer");
  const custom = submissions.filter((s) => s.type === "custom");

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/50 px-4">
        <form onSubmit={handleLogin} className="bg-card rounded-xl p-8 shadow-elevated border border-border w-full max-w-sm space-y-5">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7 text-secondary" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">Admin Login</h1>
            <p className="text-sm text-muted-foreground mt-1">Ecometra360 Dashboard</p>
          </div>
          <Input
            type="email"
            placeholder="Email"
            value={loginForm.email}
            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            required
          />
          {loginError && <p className="text-sm text-destructive text-center">{loginError}</p>}
          <Button type="submit" className="w-full bg-accent-gradient text-accent-foreground">
            Sign In
          </Button>
          <Button type="button" variant="ghost" className="w-full" onClick={() => navigate("/")}>
            ← Back to Site
          </Button>
        </form>
      </div>
    );
  }

  const renderCard = (sub: Submission) => (
    <div key={sub.id} className="bg-card rounded-lg border border-border p-5 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-foreground truncate">
              {sub.type === "custom" ? (sub as CustomWork).title : ("name" in sub ? sub.name : "")}
            </h3>
            <Badge variant="outline" className={statusColors[sub.status]}>{sub.status}</Badge>
            {sub.type === "custom" && (
              <Badge variant="outline" className="text-xs">{(sub as CustomWork).priority}</Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {new Date(sub.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
        <button onClick={() => deleteSubmission(sub.id)} className="text-muted-foreground hover:text-destructive shrink-0">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {sub.type === "quote" && (
        <div className="text-sm text-muted-foreground space-y-1">
          <p><span className="text-foreground font-medium">Email:</span> {(sub as any).email}</p>
          <p><span className="text-foreground font-medium">Phone:</span> {(sub as any).phone}</p>
          <p><span className="text-foreground font-medium">Service:</span> {(sub as any).service}</p>
          <p><span className="text-foreground font-medium">Message:</span> {(sub as any).message}</p>
        </div>
      )}

      {sub.type === "freelancer" && (
        <div className="text-sm text-muted-foreground space-y-1">
          <p><span className="text-foreground font-medium">Email:</span> {(sub as any).email}</p>
          <p><span className="text-foreground font-medium">Expertise:</span> {(sub as any).expertise}</p>
          <p><span className="text-foreground font-medium">Experience:</span> {(sub as any).experience} yrs</p>
          <p><span className="text-foreground font-medium">Portfolio:</span> {(sub as any).portfolio}</p>
          <p><span className="text-foreground font-medium">Intro:</span> {(sub as any).intro}</p>
        </div>
      )}

      {sub.type === "custom" && (
        <p className="text-sm text-muted-foreground">{(sub as CustomWork).description}</p>
      )}

      <div className="flex items-center gap-2 pt-2 border-t border-border">
        <Select value={sub.status} onValueChange={(v) => updateSubmission(sub.id, { status: v as any })}>
          <SelectTrigger className="h-8 text-xs w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Assign to..."
          value={sub.assignedTo}
          onChange={(e) => updateSubmission(sub.id, { assignedTo: e.target.value })}
          className="h-8 text-xs flex-1"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted/50">
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg font-bold text-primary">ecometra<span className="text-secondary">360</span></span>
            <Badge variant="secondary" className="text-xs">Admin</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Dialog open={customOpen} onOpenChange={setCustomOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-accent-gradient text-accent-foreground">
                  <Plus className="w-4 h-4 mr-1" /> Add Work
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Custom Work</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-2">
                  <Input placeholder="Title" value={customForm.title} onChange={(e) => setCustomForm({ ...customForm, title: e.target.value })} />
                  <Textarea placeholder="Description" rows={3} value={customForm.description} onChange={(e) => setCustomForm({ ...customForm, description: e.target.value })} />
                  <Select value={customForm.priority} onValueChange={(v) => setCustomForm({ ...customForm, priority: v as any })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button onClick={handleAddCustom} className="w-full">Create</Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="sm" variant="ghost" onClick={() => setAuthed(false)}>
              <LogOut className="w-4 h-4 mr-1" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Quote Requests", count: quotes.length, icon: ClipboardList, color: "text-blue-500" },
            { label: "Freelancer Apps", count: freelancers.length, icon: Users, color: "text-green-500" },
            { label: "Custom Work", count: custom.length, icon: Briefcase, color: "text-purple-500" },
          ].map((s) => (
            <div key={s.label} className="bg-card rounded-lg border border-border p-4 flex items-center gap-3">
              <s.icon className={`w-8 h-8 ${s.color}`} />
              <div>
                <p className="text-2xl font-bold text-foreground">{s.count}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <Tabs defaultValue="quotes">
          <TabsList className="mb-4">
            <TabsTrigger value="quotes">Quote Requests ({quotes.length})</TabsTrigger>
            <TabsTrigger value="freelancers">Freelancer Apps ({freelancers.length})</TabsTrigger>
            <TabsTrigger value="custom">Custom Work ({custom.length})</TabsTrigger>
            <TabsTrigger value="all">All ({submissions.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="quotes">
            <div className="grid md:grid-cols-2 gap-4">{quotes.length ? quotes.map(renderCard) : <p className="text-muted-foreground col-span-2 text-center py-10">No quote requests yet.</p>}</div>
          </TabsContent>
          <TabsContent value="freelancers">
            <div className="grid md:grid-cols-2 gap-4">{freelancers.length ? freelancers.map(renderCard) : <p className="text-muted-foreground col-span-2 text-center py-10">No freelancer applications yet.</p>}</div>
          </TabsContent>
          <TabsContent value="custom">
            <div className="grid md:grid-cols-2 gap-4">{custom.length ? custom.map(renderCard) : <p className="text-muted-foreground col-span-2 text-center py-10">No custom work yet.</p>}</div>
          </TabsContent>
          <TabsContent value="all">
            <div className="grid md:grid-cols-2 gap-4">{submissions.length ? submissions.map(renderCard) : <p className="text-muted-foreground col-span-2 text-center py-10">No submissions yet.</p>}</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
