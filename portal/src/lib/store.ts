import fs from "node:fs";
import path from "node:path";
import type { PortalTask } from "./types";

const FILE = path.join(process.cwd(), "data", "tasks.json");

export function readTasks(): PortalTask[] {
  if (!fs.existsSync(FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf-8")) as PortalTask[];
  } catch {
    return [];
  }
}

export function writeTasks(tasks: PortalTask[]): void {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2), "utf-8");
}

export function upsertTask(task: PortalTask): PortalTask {
  const tasks = readTasks();
  const index = tasks.findIndex((item) => item.id === task.id);
  if (index >= 0) tasks[index] = task;
  else tasks.unshift(task);
  writeTasks(tasks);
  return task;
}

export function findTask(id: string): PortalTask | undefined {
  return readTasks().find((task) => task.id === id);
}
