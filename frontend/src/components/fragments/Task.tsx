import Divider from "../elements/task/Divider";
import TaskList from "../elements/task";

interface TaskProps {
  title: string;
}

function Task({ title }: TaskProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Divider />
      <TaskList />
    </div>
  );
}

export default Task;
