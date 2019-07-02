import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Image from '../images/main.png';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100vh - 50px)',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    color: 'white',
    textShadow: '0 0 10px #FFFFFF, 2px 2px 2px rgba(206,89,55,0)',
    marginBottom: theme.spacing(5),
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 50,
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 50,
    marginTop: 50,
    alignSelf: 'flex-end'
  },
  footer : {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 70,
  },
  text: {
    textDecoration: 'none',
    color: 'white',
    padding: theme.spacing(2),
  },
  link_c : {
    border: '2px solid white',
    textDecoration: 'none',
    '&:hover':{
      border: '2px solid #e94155',
    }
  },
  link : {
    textDecoration: 'none',
  },
}));


export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <div className={classes.header}>
        <RouterLink href="#" variant="body2" to="/login"  className={classes.link}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        </RouterLink>
      </div>

      <Typography component="h1" variant="h1" className={classes.title}>
        Message bowl
      </Typography>

      <div className={classes.footer}>
        <RouterLink href="#" variant="body2" to="/messages"  className={classes.link_c}>
          <Typography component="h1" variant="h4" className={classes.text}>
            Go to messages
          </Typography>
        </RouterLink>
      </div>
    </Grid>
  );
}
