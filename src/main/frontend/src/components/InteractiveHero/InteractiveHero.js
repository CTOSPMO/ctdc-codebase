/* eslint-disable */

import React from 'react';
import { withStyles } from '@material-ui/core';
import icon from '../../assets/icons/Icon-CaseDetail.svg';
import HorseShoe from './HorseShoe';
import casesActive from '../../assets/landing/animation/casesActive.png';
// import casesInActive from '../../assets/landing/animation/casesInActive.png';
import filesActive from '../../assets/landing/animation/filesActive.png';
// import filesInActive from '../../assets/landing/animation/filesInActive.png';
import trialsActive from '../../assets/landing/animation/trialsActive.png';
// import trialsInActive from '../../assets/landing/animation/trialsInActive.png';
import CircularIcon from './CircularIcon';

const dialSize = 180;
const dialLineWidth = 12;


const InteractiveHero = ({ classes }) => {
  const [activeState, setActiveState] = React.useState({
    isActive: 'cases',
    transformAngle: 0,
  });

  return (
    <div className={classes.animationWrapper}>
      <div className={classes.logo1} onMouseEnter={() => { setActiveState({ isActive: 'cases', transformAngle: 0}); }}>
        <CircularIcon isActive={activeState.isActive === 'cases'} regularImage={casesActive} activeImage={casesActive} />
      </div>
      <HorseShoe transformAngle={activeState.transformAngle}/>

      <div className={classes.logo2} onMouseEnter={() => { setActiveState({ isActive: 'trails',transformAngle: 90 }); }}>
        <CircularIcon isActive={activeState.isActive === 'trails'} regularImage={trialsActive} activeImage={trialsActive} />
      </div>
      <div className={classes.logo3} onMouseEnter={() => { setActiveState({ isActive: 'files', transformAngle: 180 }); }}>
        <CircularIcon isActive={activeState.isActive === 'files'} regularImage={filesActive} activeImage={filesActive} />
      </div>
    </div>
  );
};

const styles = (theme) => ({
  animationWrapper:{
    left: `calc(70%)`,
    position: 'absolute',
  },
  logo1: {
    position: 'absolute',
    float: 'left',
    marginTop: '-2px',
    width: '100px',
  },
  logo2: {
    left:'180px',
    position: 'absolute',
    float: 'left',
    marginTop: '180px',
    width: '100px',
  },
  logo3: {
    marginTop: '400px',
    position: 'absolute',
    float: 'left',
    width: '100px',
  },
});


export default withStyles(styles)(InteractiveHero);
