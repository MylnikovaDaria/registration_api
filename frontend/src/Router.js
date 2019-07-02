
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Messages from './components/Messages.js';
import SingleMessage from './components/SingleMessage.js';
import Registration from './components/Registration.js';


const HomeLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/home"{...props} />);

const LoginLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/login" {...props} />
));

const RegistrationLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/messages" {...props} />
));

const useStyles =  makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  btn: {
  marginLeft: 40,
  marginRight: 40,
  color: 'white',
  },
  title: {
    paddingTop: 25,
    color : '#3f51b5',
  }
})


export default function LinkRouter() {
  const classes = useStyles();
  return (
    <Router>
      <div className="main">

      <nav className="nav">
        <Link className={classes.btn} component={HomeLink} to="/">
          Home
        </Link>
        <br />
        <Link className={classes.btn} component={LoginLink} to="/login" >
          Login
        </Link>
        <br />
        <Link className={classes.btn} component={RegistrationLink} to="/messages">
        Messages
        </Link>
        </nav>

          <Route path ='/' exact component={Home}/>
          <Route path ='/home' component={Home}/>
          <Route path ='/login' component={Login}/>
          <Route path ='/message/:id' component={SingleMessage}/>
          <Route path ='/messages' component={Messages}/>
          <Route path ='/registration' component={Registration}/>
      </div>
    </Router>
  );
}
