import React from "react";
import { Button, TextField, Grid, Container, Paper, AppBar, Typography, Toolbar, Link } from "@material-ui/core";
import { StylesProvider, styled, ThemeProvider } from '@material-ui/core/styles';

const LoginButton = styled(Button)({
  background: '#DE8B47'
})

const CreateUserButton = styled(Button)({
  background: '#5E80DF'
})

const Login = ({ loginUser, createUserClick }) => {
  return (
    <StylesProvider injectFirst>
      <div id ='login'>
        <Container maxWidth="xs" >
          <img id="logo" src="https://cdn.discordapp.com/attachments/876099998331322400/876861169980293140/comp_12.png"></img>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField id='lUser' fullWidth label="Username" name="username" size="small" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='lPass'
                      fullWidth
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <LoginButton fullWidth id='loginButton' variant="contained" onClick={loginUser}>
                  Log in
                </LoginButton>
                <CreateUserButton color="primary" id='createUser' className='createUser' fullWidth variant="contained" onClick={createUserClick}>
                  Create User
                </CreateUserButton>
              </Grid>
            </Grid>
          </form>
      </Container>
    </div>
  </StylesProvider>
  )
}

export default Login;