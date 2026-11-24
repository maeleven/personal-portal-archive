import FeedbackWidget from "@/components/FeedbackWidget";
import RepoList from "@/components/RepoList";
import { getGithubRepos } from "@/lib/data";

export default function GithubPage() {
  const repos = getGithubRepos();

  return (
    <div className="space-y-10">
      <div>
        <h1 className="page-title">GitHub 关注</h1>
        <p className="page-subtitle">
          我 Star 和持续关注的开源项目。原型使用本地数据，正式版可直接切换为 GitHub API 拉取。
        </p>
      </div>

      <RepoList repos={repos} />

      <FeedbackWidget sourcePage="/github" />
    </div>
  );
}
