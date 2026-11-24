import fs from "node:fs";
import path from "node:path";
import type { GithubRepo, Work } from "./types";

function readJson<T>(file: string): T {
  const filePath = path.join(process.cwd(), "data", file);
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

export function getWorks(): Work[] {
  return readJson<Work[]>("works.json");
}

export function getGithubRepos(): GithubRepo[] {
  return readJson<GithubRepo[]>("github.json");
}
