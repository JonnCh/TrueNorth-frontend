import { Task } from '../../models/Task';
import TaskComponent from '../Task/TaskComponent';

export interface TaskListComponentProps {
  tasks: Task[];
  onComplete: (t: Task) => void;
}

const TaskListComponent = ({ tasks, onComplete }: TaskListComponentProps) => {
  return (<div style={{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '10px',
    margin: '10px'
  }}>
    {tasks.map((t, i) => <TaskComponent key={t._id} number={i + 1}
      task={t} onComplete={onComplete} />)}
  </div>
  );
};

export default TaskListComponent;