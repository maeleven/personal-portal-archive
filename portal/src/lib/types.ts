export type FeedbackType = "bug" | "feature" | "idea" | "other";
export type TaskStatus = "pending" | "running" | "done";

export interface PortalTask {
  id: string;
  title: string;
  type: FeedbackType;
  content: string;
  raw?: string;
  sourcePage: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
  result: string | null;
  workbuddyId?: string;
}

export interface FeedbackInput {
  type: FeedbackType;
  content: string;
  raw?: string;
  sourcePage: string;
}

export interface Work {
  id: string;
  name: string;
  summary: string;
  baseProject: string;
  changes: string[];
  tech: string[];
  accent: string;
  url?: string;
  repo?: string;
  year: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string;
  language: string | null;
  stars: number;
  url: string;
  topics: string[];
  updatedAt: string;
}

export const FEEDBACK_LABELS: Record<FeedbackType, string> = {
  bug: "问题反馈",
  feature: "功能需求",
  idea: "点子建议",
  other: "其他",
};

export const STATUS_LABELS: Record<TaskStatus, string> = {
  pending: "待处理",
  running: "进行中",
  done: "已完成",
};
