import { Card, CardContent } from '@mui/material';
import { useState } from 'react';
import { Task } from '../../models/Task';
import TaskModalComponent from '../TaskModal/TaskModalComponent';

export interface TaskComponentProps {
  task: Task,
  number: Number;
  onComplete: (t: Task) => void;
}

const TaskComponent = ({ task, number, onComplete }: TaskComponentProps) => {
  const [open, setOpen] = useState(false);

  return (<Card sx={{ maxWidth: 150 }}>
    <CardContent>
      <div onClick={() => setOpen(true)}>
        <div>{`Task # ${number}`}</div>
        <div>{`Title: ${task.title}`}</div>
        <div>{`Status: ${task.status ?? ""}`}</div>
      </div>
      <TaskModalComponent number={number} task={task}
        open={open} setOpen={setOpen} onComplete={onComplete} />
    </CardContent>
  </Card>)
};

export default TaskComponent;