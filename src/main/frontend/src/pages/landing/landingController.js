/* eslint-disable */
import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import imgAbout from '../../assets/landing/About-image.jpg';
import imgTrial from '../../assets/landing/Trials-image.jpg';
import imgAccess from '../../assets/landing/RequestAccess-LP.jpg';
import icon from '../../assets/landing/LP_ReadMore.svg';
import iconAbout from '../../assets/landing/LP_About_Fullarticle.Arrow.svg';
import texturebg from '../../assets/landing/BackgroundTexture-LP.jpg'
import l9dg from '../../assets/landing/Cases-LP.jpg';
import herobg from '../../assets/landing/tmp.jpg';
import { Button } from '../../components/Wrappers/Wrappers';
import cn from '../../utils/classNameConcat';
import starImg from '../../assets/LP_FLARE.2.png';
import dogImg from '../../assets/landing/dog-bubble.png';
import humanImg from '../../assets/landing/human-bubble.png';

const LandingController = ({ classes }) => (
  <div className={classes.page}>
    <div className={classes.container}>
     <div className={classes.hero}>
      <Grid container spacing={16} direction="row">
         <img className={classes.heroImage} src={herobg} alt="CTDC about " />
       </Grid>
        </div>
    </div>
    <div className={classes.container}>
      <Grid container spacing={16} direction="row" className={cn(classes.paddingTop30, classes.paddingLeft50)}>
         <div className={classes.bannerTexture}>
                 Exploring, analyzing, and understanding the data from human cancer trials
         </div>
       </Grid>
        <Grid container spacing={16} direction="row" className={cn(classes.paddingTop30, classes.paddingLeft50)}>
            <div className={classes.redButtonSection}>
                <Link to="/cases" className={classes.redButton}>Explore</Link>
            </div>
      </Grid>
    </div>
      <div className={classes.container}>
      <div className={classes.texture}>
        <Grid container spacing={16} direction="row" className={classes.landingContainer}>
        <div className={classes.contentLeft}>
          <div className={classes.about}>
            <div className={classes.aboutImageSection}>
              <img src={imgAbout} className={classes.aboutImage} alt="CTDC about" />
            </div>
            <div className={classes.CTDCWords}>
                About the Clinical Trials Data Commons (CTDC)
            </div>
            <div className={classes.aboutContent}>
                NCI's Division of Cancer Treatment and Diagnosis (DCTD) charged
                the Frederick National Laboratory for Cancer Research (FNLCR) to
                build the Integrated Canine Data Commons (CTDC), a cloud-based repository
                of canine cancer data. CTDC was established to further research
                on human cancers by enabling comparative
                analysis with canine cancer. The data in the CTDC is sourced
                from multiple different programs and projects; all focused on
                the canine subjects.
            </div>
            <div className={classes.aboutButtonSection}>
              <div className={classes.aboutButtonLeft}>
                <img src={iconAbout} className={classes.iconAbout} alt="CTDC about icon" />
              </div>
              <div className={classes.aboutButtonRight}>
                <Link to="/purpose" className={classes.aboutButton}>READ MORE</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.contentRight}>
          <div className={classes.contentRightTop}>
            <div className={classes.program}>
              <div className={classes.programImg}>
                <img className={classes.image} src={imgTrial} alt="CTDC  Trials" />
              </div>
              <div className={classes.content}>
                <div className={classes.contentHeader}> Trials</div>
                <div className={classes.contentContainer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>

              </div>
              <div className={classes.blueButton}>
                <div className={classes.blueButtonLeft}>
                  <img className={classes.icon} src={icon} alt="CTDC about " />
                  {' '}
                </div>
                <div className={classes.blueButtonRight}>
                  <Link to="/programs" className={classes.blueButton}>READ MORE</Link>
                </div>
              </div>
            </div>
            <div className={classes.studies}>
              <div className={classes.programImg}>
                <img className={classes.image} src={imgAccess} alt="CTDC Request ACCESS " />
              </div>
              <div className={classes.content}>
                <div className={classes.contentHeader}> REQUEST ACCESS</div>
                <div className={classes.contentContainer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>

              </div>
              <div className={classes.blueButton}>
                <div className={classes.blueButtonLeft}>
                  <img className={classes.icon} src={icon} alt="CTDC about " />
                  {' '}
                </div>
                <div className={classes.blueButtonRight}>
                  <Link to="/studies" className={classes.blueButton}>READ MORE</Link>
                </div>
              </div>
            </div>
           
          </div>
          <div className={classes.contentRightBottom}>
            <div className={classes.cases}>
              <div className={classes.greyContentHeader}> Cases</div>
              <div className={classes.greyContent}>
Search all the Cases and build cohorts from all the
Programs/Studies within the CTDC. The data files from
 these cohorts can then be analyzed in the Cloud Resources.
              </div>
              <div className={classes.greybuttonSection}>
                <div className={classes.blueButtonLeft}>
                  <img className={classes.greyIcon} src={icon} alt="CTDC about " />
                  {' '}
                </div>
                <div className={classes.blueButtonRight}>
                  <Link to="/cases" className={classes.greybutton}>Explore</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      </div>
    
    </div>
  </div>
);
const styles = (theme) => ({
  page: {
    marginTop: '-47px',
  },
  heroImage:{
    width:'100%',
    height: '100%',
  },
  texture: {
    backgroundSize: 'cover',
    backgroundImage: `url(${texturebg})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    padding: '120px 0 80px 0',
  },
  container: {
    fontFamily: 'Raleway, sans-serif',
    margin: '0 auto',
    
  },

  bannerTexture:{
    color:'#4898B4',
    fontFamily:'Raleway',
    fontSize:'19px',
    fontWeight:'600',
    lineHeight:'60px',
    textAlign:'center',
    margin:'0 auto',
    letterSpacing: '0.050pt',
    textTransform:'uppercase',
    width: '869px',
  },
  redButtonSection:{
    margin:'0 auto -15px auto',
    background:'#C53B27',
    width:'179px',
    height:'47px',
    borderRadius:'50px',
    textAlign:'center',
  },
  redButton:{
    height:'13px',
    color:'#FFFFFF',
    fontFamily:'Raleway',
    fontSize:'16px',
    fontWeight:'bold',
    lineHeight:'47px',
    textAlign:'center',
    textDecoration:'none',
    textTransform:'uppercase',
    letterSpacing: '0.8px',
  },
  headerTitle: {
    paddingTop: '180px',
    paddingBottom: '12px',
    width: '208px',
    color: '#FFFFFF',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '40px',
    fontWeight: 'bold',
    lineHeight: '40px',

  },
  paddingLeft50: {
    paddingLeft: '50px',
  },
  headerContent: {
    height: '98px',
    width: '194px',
    color: '#CB8311',
    fontFamily: 'Raleway',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '22px',
    marginBottom: '40px',
  },

  iconAbout: {
    height: '17px',
    width: '9px',
    marginTop: '15px',
    marginLeft: '20px',
  },
  icon: {
    width: '20px',
    marginTop: '13px',
    marginLeft: '23px',
  },


  aboutImage: {
    width: '300px',
    padding: '14px',
  },
  aboutImageSection: {
  },
  CTDCWords: {
    height: '188px',
    background: '#0B2731',
    color: '#FFFFFF',
    fontSize: '26px',
    textTransform: 'uppercase',
    lineHeight: '29px',
    padding: '24px 75px 26px 26px',
    fontFamily: 'Oswald',
  },
  landingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '15px',
  },
  contentLeft: {
    float: 'left',
    paddingRight: '10px',
  },
  about: {
    width: '300px',
    backgroundColor: '#20506A',
  },
  image: {
    width: '293px',
    height: '251px',
  },
  aboutContent: {
    background: '#20506A',
    width: '300px',
    padding: '30px 30px 32px 30px',
    color: '#fff',
    fontFamily: '"Open Sans"',
    fontSize: '14px',
    lineHeight: '22px',
  },
  aboutButtonSection: {
    background: '#20506A',
    height: '71px',
  },
  imgIconAbout: {
    width: '49px',
  },
  aboutButtonLeft: {
    float: 'left',
    background: '#C53B27',
    height: '45px',
    width: '48px',
  },
  aboutButtonRight: {
    background: '#894439',
    float: 'left',
    height: '45px',
    width: '132px',
  },
  aboutButton: {
    color: '#ffffff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '45px',
    paddingLeft: '20px',
    boxShadow: 'none',
  },

  content: {
    width: '100%',
    background: '#fff',
    paddingLeft: '30px',
    paddingTop: '6px',
  },
  contentHeader: {
    color: '#20506A',
    fontFamily: 'Oswald',
    fontSize: '26px',
    fontWeight: '500',
    lineHeight: '27px',
    padding: '10px 0',
    textTransform: 'uppercase',
  },
  contentContainer: {
    width: '215px',
    color: '#010101',
    fontFamily: 'Lato',
    fontSize: '15px',
    lineHeight: '22px',
    paddingLeft:'2px',
    paddingBottom: '10px',
  },
 
  program: {
    float: 'left',
    padding: '0 10px 8px 0px',
  },
  programImg: {
    background: '#fff',
  },
  studies: {
    float: 'left',
  },

  contentRightBottom: {
    float: 'left',
    width: '597px',
    background: '#fff',
    backgroundImage: `url(${l9dg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cases: {
    height: '438px',
    paddingLeft: '370px',
    paddingTop: '70px',
  },
  greybuttonSection: {
    height: '46px',
    width: '176px',
    backgroundColor: '#20506A',
    marginTop: '20px',

  },
  blueButton: {
    height: '45px',
    background: '#5396AA',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '25px',
    paddingLeft: '8px',
    textDecoration: 'none',
  },
  blueButtonLeft: {
    float: 'left',
  },
  blueButtonRight: {
    float: 'left',
    lineHeight: '47px',
    color: '#fff',
    textTransform: 'uppercase',
  },
  greyContentHeader: {
    color: '#20506A',
    fontFamily: 'Oswald',
    fontSize: '31px',
    fontWeight: '500',
    lineHeight: '32px',
    padding: '15px 0',
    textTransform: 'uppercase',
  },
  greyContent: {
    height: '143px',
    width: '166px',
    color: '#010101',
    fontFamily: 'Lato',
    fontSize: '15px',
    lineHeight: '22px',
  },
  greyIcon: {
    width: '20px',
    marginTop: '15px',
    marginLeft: '28px',
  },
  greybutton: {
    padding: '15px 5px 0 0',
    height: '9px',
    width: '71px',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '19.31px',
    textDecoration: 'none',
    marginLeft: '8px',
    '&:hover': {
      color: '#ffffff',
    },
  },
  paddingBottom50: {
    paddingBottom: '50px',
  },
  paddingTop30: {
    paddingTop: '30px',
  },
  animationContainer: {
    position: 'relative',
    height: '800px',
    maxHeight: '800px',
    overflow: 'hidden',
  },

  paddingLeft2: {
    paddingLeft: '2px',
  },

});
export default withStyles(styles, { withTheme: true })(LandingController);
