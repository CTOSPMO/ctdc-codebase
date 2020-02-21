import React from 'react';
import { withStyles } from '@material-ui/core';

const CircularIcon = ({
  classes, isActive, activeImage, regularImage,
}) => (
  <>
    <img className={classes.image} alt="img" src={isActive ? activeImage : regularImage} />
  </>
);

const styles = () => ({
  image: {
    height: '120px',
    width: '120px',
  },
});
export default withStyles(styles)(CircularIcon);
