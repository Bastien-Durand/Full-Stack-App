import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import './App.css';

function App() {
  const isAuthenticated = true;

  return isAuthenticated ? <Navbar /> : <Login />;
}

export default App;
