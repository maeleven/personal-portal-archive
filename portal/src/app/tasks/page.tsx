import FeedbackWidget from "@/components/FeedbackWidget";
import TaskBoard from "@/components/TaskBoard";
import { syncTasks } from "@/lib/workbuddy";

export const dynamic = "force-dynamic";

export default async function TasksPage() {
  const tasks = await syncTasks();

  return (
    <div className="space-y-10">
      <div>
        <h1 className="page-title">任务中心</h1>
        <p className="page-subtitle">
          所有由页面反馈生成的 WorkBuddy 任务都在这里。状态会自动推进，结果完成后直接回显。
        </p>
      </div>

      <TaskBoard initialTasks={tasks} />

      <FeedbackWidget sourcePage="/tasks" />
    </div>
  );
}
