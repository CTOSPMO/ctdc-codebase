/* eslint-disable */

import React from 'react';
import { withStyles } from '@material-ui/core';
import icon from '../../assets/icons/Icon-CaseDetail.svg';
import HorseShoe from './HorseShoe';
import ActiveCases from '../../assets/landing/animation/activeCases.svg';
import InActiveCases from '../../assets/landing/animation/InActiveCases.svg';
import ActiveFiles from '../../assets/landing/animation/activeFiles.svg';
import InActiveFiles from '../../assets/landing/animation/InActiveFiles.svg';
import ActiveTrials from '../../assets/landing/animation/activeTrials.svg';
import InActiveTrials from '../../assets/landing/animation/InActiveTrials.svg';
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
        <CircularIcon isActive={activeState.isActive === 'cases'} InactiveImage={InActiveCases} activeImage={ActiveCases} />
      </div>
      <HorseShoe transformAngle={activeState.transformAngle}/>

      <div className={classes.logo2} onMouseEnter={() => { setActiveState({ isActive: 'trails',transformAngle: FacingRight }); }}>
        <CircularIcon isActive={activeState.isActive === 'trails'} InactiveImage={InActiveTrials} activeImage={ActiveTrials} />
      </div>
      <div className={classes.logo3} onMouseEnter={() => { setActiveState({ isActive: 'files', transformAngle: FacingDown }); }}>
        <CircularIcon isActive={activeState.isActive === 'files'} InactiveImage={InActiveFiles} activeImage={ActiveFiles} />
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
    marginTop: '50px',
    width: '100px',
    left: '40px',
  },
  logo2: {
    left:'220px',
    position: 'absolute',
    float: 'left',
    marginTop: '220px',
    width: '100px',
  },
  logo3: {
    marginTop: '400px',
    position: 'absolute',
    float: 'left',
    left: '40px'
  },
});


export default withStyles(styles)(InteractiveHero);
