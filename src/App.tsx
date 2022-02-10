import './App.css';
import { Outlet, useNavigate } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import { Typography } from '@mui/material';

const App = () => {

  const navigate = useNavigate();

  return (
    <div className="App">
      <div>
        <h1>Tasks App</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Outlet />
          <Navigation />
        </nav>
      </div>
    </div>
  );
}

export default App;
