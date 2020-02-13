import React from 'react';
import { withStyles } from '@material-ui/core';
import cn from '../../utils/classNameConcat';


const InteractiveHero = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={cn(classes.dialContainer, classes.container1)}>
      <div className={classes.wedge} />
    </div>
    <div className={cn(classes.dialContainer, classes.container2)}>
      <div className={classes.wedge} />
    </div>
    <div className={cn(classes.marker, classes.start)} />
    <div className={cn(classes.marker, classes.end)} />
  </div>
);

const styles = () => ({
  wrapper: {
    position: 'absolute',
    width: '4em',
    height: '4em',
    left: 'calc(50% - 2em)',
  },
  dialContainer: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    overflow: 'hidden',
    width: '2em',
  },
  wedge: {
    background: 'red',
    height: '4em',
    width: '2em',
  },
  container1: {
    left: '2em',
    '& $wedge': {
      borderRadius: '0 4em 4em 0',
      left: '0',
      transformOrigin: '0 50%',
    },
  },
  //   .container1 .wedge {
  //     animation: rotate-bg-1 4s infinite linear,
  //     border-radius: 0 4em 4em 0,
  //     left: 0,
  //     transform-origin: 0 50%,
  //   }
  container2: {
    left: '0',
    '& $wedge': {
      borderRadius: '4em 0 0 4em',
      left: '0',
      transformOrigin: '2em 2em',
    },
  },
  //   .container2 .wedge {
  //     animation: rotate-bg-2 4s infinite linear,
  //     border-radius: 4em 0 0 4em,
  //     transform-origin: 2em 2em,
  //   }
  marker: {
    background: 'green',
    borderRadius: '50%',
    height: '0.5em',
    width: '0.5em',
    position: 'absolute',
    top: '0',
    left: 'calc(50% - 0.25em)',
  },
  end: {
    // animation: rotate-marker 4s infinite linear;
    transformOrigin: '50% 2em',
  },
});


export default withStyles(styles)(InteractiveHero);
