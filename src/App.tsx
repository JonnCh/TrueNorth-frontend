import './App.css';
import { Link } from 'react-router-dom';

function App() {
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
          <Link to="/tasks">Tasks</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
