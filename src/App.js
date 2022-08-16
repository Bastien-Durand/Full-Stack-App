import Login from './Components/Login/Login';
import People from './Components/People/People';
import './App.css';

function App() {
  const isAuthenticated = true;

  return <div className='App'>{isAuthenticated ? <People /> : <Login />}</div>;
}

export default App;
