import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom'

const Navigation = () => {

  const navigate = useNavigate();

  return (
    <BottomNavigation
      showLabels
      value={""}

      onChange={(event, newValue) => {
        navigate({ pathname: newValue }, { replace: false,  });
      }}
    >
      <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="Tasks" value="/tasks" icon={<TaskIcon />} />
    </BottomNavigation>);
}

export default Navigation;
