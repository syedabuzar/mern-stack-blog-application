import React, { useState, useEffect, useContext } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
  width: 100,
  display: 'flex',
  margin: 'auto',
  padding: '50px 0 0',
  transform: 'scale(1.5)',
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const signupInitialValue = {
  name: '',
  username: '',
  password: '',
};

const Login = () => {
  const [account, toggleAccount] = useState('login');
  const [signup, setSignup] = useState(signupInitialValue);
  const imageURL = 'https://fontmeme.com/images/Blogger-Logo.jpg';

  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  };

  const onInputChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt='login' />
        {account === 'login' ? (
          <Wrapper>
            <TextField variant='standard' label='Enter Username' />
            <TextField variant='standard' label='Enter Password' />
            <LoginButton variant='contained'>Login</LoginButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <SignupButton onClick={() => toggleSignup()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant='standard'
              onChange={(e) => onInputChange(e)}
              name='name'
              label='Enter Name'
            />
            <TextField
              variant='standard'
              onChange={(e) => onInputChange(e)}
              name='username'
              label='Enter Username'
            />
            <TextField
              variant='standard'
              name='password'
              onChange={(e) => onInputChange(e)}
              label='Enter Password'
            />
            <SignupButton variant='contained'>Signup</SignupButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <LoginButton variant='contained' onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
