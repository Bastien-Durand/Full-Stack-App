import Login from './Components/Login';
import Homepage from './Components/Homepage';
import './App.css';

function App() {
  const isAuthenticated = false;

  return (
    <div className='App'>{isAuthenticated ? <Homepage /> : <Login />}</div>
  );
}

export default App;
