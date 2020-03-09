import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Paper, Typography, withStyles,
} from '@material-ui/core';

const Error = ({ classes }) => (
  <Grid container className={classes.container}>
    <Paper classes={{ root: classes.paperRoot }}>
      <div className={classes.errorCodeText}>404</div>
      <Typography variant="h3" fontWeight="bold" color="white">PAGE NOT FOUND</Typography>
      <div className={classes.errorTextRow}>
        <Typography variant="h6" color="white" className={classes.errorText}>
The page you are looking for does not exist or another error has occured. Go back or head&nbsp;
          <Link to="/">home</Link>
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
    background: '#bff5f0',
    marginTop: '-49px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    boxShadow: 'none',
    background: '#bff5f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 12,
    paddingBottom: theme.spacing.unit * 16,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6,
    maxWidth: 800,
  },
  errorTextRow: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
    alignItems: 'center',
    width: 500,
  },
  dogHumanHelix: {
    width: 400,
  },
});

export default withStyles(styles, { withTheme: true })(Error);
