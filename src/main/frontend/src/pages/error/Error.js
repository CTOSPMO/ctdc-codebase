import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Paper, Typography, withStyles,
} from '@material-ui/core';
import errorBG800 from '../../assets/error/errorBG800.png';
import errorBG1200 from '../../assets/error/errorBG1200.png';
import errorBG1600 from '../../assets/error/errorBG1600.png';
import errorBG2000 from '../../assets/error/errorBG2000.png';


const Error = ({ classes }) => (
  <Grid container className={classes.container}>
    <Paper classes={{ root: classes.paperRoot }}>
      <div className={classes.errorCodeText}>404</div>
      <Typography className={classes.boldText}>PAGE NOT FOUND</Typography>
      <div className={classes.errorTextRow}>
        <Typography className={classes.errorText}>
The page you are looking for does not exist or another error has occured. Go back or head&nbsp;
          <Link className={classes.link} to="/">home</Link>
          {' '}
to choose another direction.
        </Typography>
      </div>
    </Paper>
  </Grid>
);

const styles = (theme) => ({
  container: {
    display: 'flex',
    marginTop: '-49px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e7edf4',
    '@media (min-width: 800px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      background: `url(${errorBG800})`,
    },
    '@media (min-width: 1200px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      background: `url(${errorBG1200})`,
    },
    '@media (min-width: 1600px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      background: `url(${errorBG1600})`,
    },
    '@media (min-width: 2000px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      background: `url(${errorBG2000})`,
    },
    top: 0,
    left: 0,
  },
  errorCodeText: {
    fontSize: '10em',
    color: 'white',
    fontWeight: 'bold',
  },
  divider: {
    height: '1px',
    width: '800px',
  },
  paperRoot: {
    borderTop: '4px solid #417d96',
    boxShadow: 'none',
    background: '#e7edf4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 12,
    paddingBottom: theme.spacing.unit * 16,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6,
    maxWidth: 800,
  },
  boldText: {
    fontSize: '.9em',
    fontWeight: 'bolder',
  },
  errorTextRow: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
    alignItems: 'center',
    width: 500,
  },
  errorText: {
    color: 'rgb(0, 76, 115)',
  },
  link: {
    color: '#417d96',
    textDecoration: 'underline',
  },
});

export default withStyles(styles, { withTheme: true })(Error);
