import Login from './Components/Login';
import People from './Components/People';
import './App.css';

function App() {
  const isAuthenticated = true;

  return <div className='App'>{isAuthenticated ? <People /> : <Login />}</div>;
}

export default App;
