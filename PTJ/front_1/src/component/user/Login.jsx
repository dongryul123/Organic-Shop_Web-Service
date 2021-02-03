import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

import AuthenticationService from '../JWT/AuthenticationService';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


class Login extends Component {

    constructor(props) {
      super(props)
      
      this.state = {
          username: localStorage.getItem("authenticatedUser") || '',
          password: '',
          token: localStorage.getItem("token") || '',
          hasLoginFailed: false,
          showSuccessMessage: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.loginClicked = this.loginClicked.bind(this)
  }

  handleChange(event) {
      this.setState(
          {
              [event.target.name]
                :event.target.value
          }
      )
  }

  // renderRedirect = () => {
  //     console.log("리다이렉트 실행")
  //     this.props.history.push("/logined")
  // }

  loginClicked() {
      AuthenticationService
      .executeJwtAuthenticationService(this.state.username, this.state.password)
      .then((response) => {
          console.log("실행 중_ LoginClicked")
          console.log(response)
          this.setState({
              token: response.data.token
          });
          AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,this.state.token)
          
          window.location.href = '/';

      }).catch( () =>{
          console.log("로그인 오류")
          alert("존재하지 않는 회원입니다.")
          this.setState({showSuccessMessage:false})
          this.setState({hasLoginFailed:true})
      })
  }

  render(){
    const classes = {
      root: {
        height: '100vh',
      },
      image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
//        backgroundColor: 
          //this.palette.type === 'light' ? this.palette.grey[50] : this.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: 90,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: 20,
        // backgroundColor: this.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: '16px',
        marginBottom: '8px'
      },
      submit: {
        margin: '24px 0px 16px',
        padding: '10px 136.5px'
      },
    }

    return (
      <Grid container component="main" style={classes.root} style={form}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} style={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div style={classes.paper}>
            <Avatar style={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              NaNum
            </Typography>
            <form style={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                autoComplete="userID"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                // type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                style={classes.submit}
                onClick={this.loginClicked}
              >
                로그인
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    비밀번호 찾기
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="add-user" variant="body2">
                    {"회원가입"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default Login

const form ={
  marginTop:80
}