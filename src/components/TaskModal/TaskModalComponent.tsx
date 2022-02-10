import { Box, Button, Modal, Typography } from '@mui/material';
import { Task } from '../../models/Task';

export interface TaskModalComponentProps {
  task: Task;
  number: Number;
  open: boolean;
  setOpen: Function;
  onComplete: (t: Task) => void;
}

const TaskModalComponent = ({ task, number, open, setOpen, onComplete }: TaskModalComponentProps) => {

  const complete = async (task: Task) => {
    onComplete({
      ...task,
      status: "Completed"
    });
    setOpen(false);
  };

  return (<Modal

    open={open}
    onClose={(event: object, reason: string) => {
      console.log(reason);
      setOpen(false);
    }}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'white',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    }}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {`Task # ${number}`}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {`Task id: ${task._id}`}
        <tr />
        {task.title}
      </Typography>
      {task.status === "Completed" && <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {`Completed on: ${new Date(task.updatedAt).toLocaleDateString('en-US')}`}
      </Typography>}
      <Typography style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        gap: '5px'
      }}>
        <Button onClick={() => setOpen(false)} variant="outlined">Close</Button>
        {task.status !== "Completed" && <Button onClick={() => complete(task)} variant="contained">Complete</Button>}
      </Typography>
    </Box>
  </Modal>);
};

export default TaskModalComponent;