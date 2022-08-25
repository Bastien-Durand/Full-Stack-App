import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [signedIn, setIsSignedIn] = useState(false);

  const handleLogin = () => {
    if (password.length < 1) {
      setError('Enter a password');
    } else if (password.length < 5) {
      setError('Password is too short');
    }

    if (email.length < 1) {
      setEmailError('Enter valid Email');
    }
    console.log(email);
    console.log(password);
    if (email && password) {
      console.log('Signed In');
    }
  };

  const handleReset = () => {
    window.alert('Password reset request processing');
  };

  return (
    <form className='section'>
      <Card sx={{ minWidth: 275 }}>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <div>
            <TextField
              required
              error={emailError.length > 1}
              helperText={emailError}
              id='outlined-required'
              label='Email'
              defaultValue=''
              value={email || ''}
              onChange={(e) => {
                if (emailError.length > 0) {
                  setEmailError('');
                }
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <TextField
              required
              error={error.length > 1}
              helperText={error}
              id='outlined-password-input'
              label='Password'
              type='password'
              value={password || ''}
              onChange={(e) => {
                if (error.length > 0) {
                  setError('');
                }
                setPassword(e.target.value);
              }}
              autoComplete='current-password'
            />
          </div>
        </Box>
        <div className='loginbutton'>
          <Button variant='contained' onClick={handleLogin}>
            Login
          </Button>
        </div>
        <div className='resetbutton'>
          <Button variant='outlined' onClick={handleReset}>
            Reset Password
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default Login;
