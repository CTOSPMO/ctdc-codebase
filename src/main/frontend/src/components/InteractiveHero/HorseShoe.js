import React from 'react';
import { withStyles } from '@material-ui/core';

const HorseShoe = ({ classes, transformAngle }) => (
  <>
    <div className={classes.radialWrapper}>
      <img alt="CTDC horse Shoe" src={transformAngle} />
    </div>
  </>
);

const styles = () => ({
  radialWrapper: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    marginTop: '180px',
  },
}
);


export default withStyles(styles)(HorseShoe);
