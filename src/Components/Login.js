import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './Login.css';

const Login = () => {
  return (
    <div className='section'>
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
              id='outlined-required'
              label='Email'
              defaultValue=''
            />
          </div>
          <div>
            <TextField
              required
              id='outlined-required'
              label='Password'
              defaultValue=''
            />
          </div>
        </Box>
      </Card>
    </div>
  );
};

export default Login;
