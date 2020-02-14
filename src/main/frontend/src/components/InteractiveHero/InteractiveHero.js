import React from 'react';
import { withStyles } from '@material-ui/core';
import cn from '../../utils/classNameConcat';
import CaseIcon from '../../assets/trial/Trials_Title_Bar.Icon.svg';
import icon from '../../assets/icons/Icon-CaseDetail.svg';


const dialSize = 180;
const dialLineWidth = 12;

const InteractiveHero = ({ classes }) => (
  <>
    <div className={classes.logo1}>
      <img
        src={CaseIcon}
        alt="CTDC case detail header logo"
      />

    </div>
    <div className={classes.radialWrapper}>
      <div className={cn(classes.radialSection, classes.radialRightSection)}>
        <div className={classes.wedge} />
      </div>
      <div className={cn(classes.radialSection, classes.radialLeftSection)}>
        <div className={classes.wedge} />
      </div>
      <div className={cn(classes.marker, classes.start)} />
      <div className={cn(classes.end, classes.marker)} />
    </div>
    <div className={classes.logo2}>
      <img
        src={CaseIcon}
        alt="CTDC case detail header logo"
      />

    </div>
    <div className={classes.logo3}>
      <img
        src={CaseIcon}
        alt="CTDC case detail header logo"
      />

    </div>
  </>
);

const styles = (theme) => ({
  radialWrapper: {
    position: 'absolute',
    width: dialSize,
    height: dialSize,
    marginTop: '180px',
    left: `calc(50% - ${dialSize}px)`,
    // padding: `calc((${theme.upCustom.header.heightLg} - 20px) / 2) 16px`,

    transform: 'rotateZ(225deg)',
    // Inner content
    '&:after': {
      content: '""',
      background: `url(${icon})`,
      borderRadius: '50%',
      width: dialSize - (dialLineWidth * 2),
      height: dialSize - (dialLineWidth * 2),
      position: 'absolute',
      top: dialLineWidth,
      left: dialLineWidth,
      transform: 'rotateZ(-225deg)',
    },
  },
  radialSection: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    overflow: 'hidden',
    width: dialSize / 2,
  },
  wedge: {
    background: theme.palette.primary.main,
    height: dialSize,
    width: dialSize / 2,
    transition: 'all 1s linear',
  },
  radialLeftSection: {
    left: '0',
    '& $wedge': {
      borderRadius: `${dialSize}px 0 0 ${dialSize}px`,
      transform: 'rotateZ(0deg)',
      transformOrigin: `${dialSize / 2} ${dialSize / 2}`,
    },
  },
  radialRightSection: {
    left: dialSize / 2,
    '& $wedge': {
      borderRadius: `0 ${dialSize}px ${dialSize}px 0`,
      left: '0',
      transform: 'rotateZ(-90deg)',
      transformOrigin: '0 50%',
    },
  },
  logo1: {
    left: `calc(50% - ${dialSize}px)`,
    position: 'absolute',
    float: 'left',
    marginTop: '-2px',
    width: '100px',
  },
  logo2: {
    left: `calc(70% - ${dialSize}px)`,
    position: 'absolute',
    float: 'left',
    marginTop: '180px',
    width: '100px',
  },
  logo3: {
    marginTop: '450px',
    left: `calc(50% - ${dialSize}px)`,
    position: 'absolute',
    float: 'left',
    width: '100px',
  },
});


export default withStyles(styles)(InteractiveHero);
