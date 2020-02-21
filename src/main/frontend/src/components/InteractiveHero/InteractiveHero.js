/* eslint-disable */

import React from 'react';
import { withStyles } from '@material-ui/core';
import icon from '../../assets/icons/Icon-CaseDetail.svg';
import HorseShoe from './HorseShoe';
import casesActive from '../../assets/landing/animation/casesActive.png';
// import casesInActive from '../../assets/landing/animation/casesInActive.png';
import filesActive from '../../assets/landing/animation/Files_active.svg';
import filesInActive from '../../assets/landing/animation/Files_inactive.svg';
import trialsActive from '../../assets/landing/animation/trialsActive.png';
// import trialsInActive from '../../assets/landing/animation/trialsInActive.png';
import CircularIcon from './CircularIcon';
import FacingDown from '../../assets/landing/animation/Dial_facing_down.svg';
import FacingUp from '../../assets/landing/animation/Dial_facing_up.svg';
import FacingRight from '../../assets/landing/animation/Dial_facing_right.svg';

const dialSize = 180;
const dialLineWidth = 12;


const InteractiveHero = ({ classes }) => {
  const [activeState, setActiveState] = React.useState({
    isActive: 'cases',
    transformAngle: FacingUp,
  });

  return (
    <div className={classes.animationWrapper}>
      <div className={classes.logo1} onMouseEnter={() => { setActiveState({ isActive: 'cases', transformAngle: FacingUp}); }}>
        <CircularIcon isActive={activeState.isActive === 'cases'} regularImage={casesActive} activeImage={casesActive} />
      </div>
      <HorseShoe transformAngle={activeState.transformAngle}/>

      <div className={classes.logo2} onMouseEnter={() => { setActiveState({ isActive: 'trails',transformAngle: FacingRight }); }}>
        <CircularIcon isActive={activeState.isActive === 'trails'} regularImage={trialsActive} activeImage={trialsActive} />
      </div>
      <div className={classes.logo3} onMouseEnter={() => { setActiveState({ isActive: 'files', transformAngle: FacingDown }); }}>
        <CircularIcon isActive={activeState.isActive === 'files'} regularImage={filesActive} activeImage={filesInActive} />
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
    marginTop: '25px',
    width: '100px',
    left: '40px',
  },
  logo2: {
    left:'280px',
    position: 'absolute',
    float: 'left',
    marginTop: '220px',
    width: '100px',
  },
  logo3: {
    marginTop: '455px',
    position: 'absolute',
    float: 'left',
    left: '40px'
  },
});


export default withStyles(styles)(InteractiveHero);
