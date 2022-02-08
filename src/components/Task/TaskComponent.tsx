import Box from '@mui/material/Box';
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

  return (
    <Box
      sx={{
        flexGrow: 2,
        width: 150,
        maxWidth: 150,
        minHeight: 75,
        backgroundColor: 'white',
        border: "1px solid black",
        padding: '10px',
        '&:hover': {
          backgroundColor: 'lightgray',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div onClick={() => setOpen(true)}>
        <div>{`Task # ${number}`}</div>
        <div>{`Title: ${task.title}`}</div>
        <div>{`Status: ${task.status ?? ""}`}</div>
      </div>
      <TaskModalComponent number={number} task={task}
          open={open} setOpen={setOpen} onComplete={onComplete}/>
    </Box>
  );
};

export default TaskComponent;