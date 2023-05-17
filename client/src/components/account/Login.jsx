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

const Login = () => {
  const [account, toggleAccount] = useState('login');
  const imageURL = 'https://fontmeme.com/images/Blogger-Logo.jpg';

  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
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
            <Typography style={{ textAlign: 'center' }}>OR</Typography>
            <SignupButton onClick={() => toggleSignup()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant='standard' label='Enter Name' />
            <TextField variant='standard' label='Enter Username' />
            <TextField variant='standard' label='Enter Password' />
            <SignupButton variant='contained'>Signup</SignupButton>
            <Typography style={{ textAlign: 'center' }}>OR</Typography>
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
