import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface QuoteSubmission {
  id: string;
  type: "quote";
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: "new" | "in-progress" | "done";
  assignedTo: string;
  createdAt: string;
}

export interface FreelancerSubmission {
  id: string;
  type: "freelancer";
  name: string;
  email: string;
  phone: string;
  expertise: string;
  experience: string;
  portfolio: string;
  tools: string;
  intro: string;
  status: "new" | "in-progress" | "done";
  assignedTo: string;
  createdAt: string;
}

export interface CustomWork {
  id: string;
  type: "custom";
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "new" | "in-progress" | "done";
  assignedTo: string;
  createdAt: string;
}

export type Submission = QuoteSubmission | FreelancerSubmission | CustomWork;

interface SubmissionsContextType {
  submissions: Submission[];
  addSubmission: (sub: Submission) => void;
  updateSubmission: (id: string, updates: Partial<Submission>) => void;
  deleteSubmission: (id: string) => void;
}

const SubmissionsContext = createContext<SubmissionsContextType | undefined>(undefined);

const STORAGE_KEY = "ecometra360_submissions";

export const SubmissionsProvider = ({ children }: { children: ReactNode }) => {
  const [submissions, setSubmissions] = useState<Submission[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  }, [submissions]);

  const addSubmission = (sub: Submission) => {
    setSubmissions((prev) => [sub, ...prev]);
  };

  const updateSubmission = (id: string, updates: Partial<Submission>) => {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? ({ ...s, ...updates } as Submission) : s))
    );
  };

  const deleteSubmission = (id: string) => {
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <SubmissionsContext.Provider value={{ submissions, addSubmission, updateSubmission, deleteSubmission }}>
      {children}
    </SubmissionsContext.Provider>
  );
};

export const useSubmissions = () => {
  const ctx = useContext(SubmissionsContext);
  if (!ctx) throw new Error("useSubmissions must be used within SubmissionsProvider");
  return ctx;
};
