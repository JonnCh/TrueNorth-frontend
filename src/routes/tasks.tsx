import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TaskListComponent from "../components/TaskList/TaskListComponent";
import { Task } from "../models/Task";
import { getTasks, updateTask } from "../services/TaskService";

const TaskPage = () => {
  const [quantity, setQuantity] = useState(10);
  const [tasks, setTasks] = useState<Task[]>([]);

  const getData = async () => {
    const result = await getTasks(quantity);
    setTasks(result);
  };

  const updateData = async (task: Task) => {
    await updateTask(task);
    await getData();
  };

  useEffect(() => {
    getData();
  }, [quantity]);

  return (
    <main style={{ padding: "10px" }}>
      <div>
        <Typography variant="h4" component="h4">
          {`Tasks (${quantity})`}
        </Typography>;
        <br/>
        <TextField id="standard-basic" label="Quantity" variant="standard" value={quantity}
          type={"number"} onChange={(v) => setQuantity(parseInt(v.target.value))} />
      </div>
      <div>
        <TaskListComponent tasks={tasks} onComplete={updateData}/>
      </div>
    </main>
  );
};

export default TaskPage