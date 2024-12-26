import FormCreateTask from "./components/fragments/Modal/FormCreateTask";
import Task from "./components/fragments/Task";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <FormCreateTask />
      <Navbar />
      <div className="container mx-auto px-4 my-4 flex gap-8 flex-col">
        <label htmlFor="create_task" className="btn">
          open modal
        </label>
        <Task title="Uncompleted Tasks" />
        <Task title="Completed Tasks" />
      </div>
    </>
  );
}

export default App;
