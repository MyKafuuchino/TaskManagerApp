import FormCreateTask from "./components/fragments/Modal/FormCreateTask";
import Task from "./components/fragments/Task";
import Navbar from "./components/Navbar";
import PlusIcon from "./assets/icons/PlusIcon.tsx";

function App() {
  return (
    <>
      <FormCreateTask />
      <Navbar />
      <div className="container mx-auto px-4 my-4 flex gap-8 flex-col">
        <div className={"w-full flex"}>
          <div className={"flex-1"}></div>
          <label htmlFor="create_task" className={"btn bg-primary text-white"}>
            <h1 className={"text-xl"}>Add new task</h1>
            <PlusIcon />
          </label>
        </div>
        <Task title="Uncompleted Tasks" />
        <Task title="Completed Tasks" />
      </div>
    </>
  );
}

export default App;
