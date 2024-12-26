import EditIcon from "../../../assets/icons/EditIcon";
import IconButton from "../iconButton";

interface TaskListProps {
  title?: string;
}

function TaskList({ title = "Task List" }: TaskListProps) {
  return (
    <div className="bg-base-200 p-4 rounded-xl shadow-sm flex items-center gap-4">
      <h4 className="flex-1 text-lg">{title}</h4>
      <IconButton>
        <EditIcon />
      </IconButton>
    </div>
  );
}

export default TaskList;
