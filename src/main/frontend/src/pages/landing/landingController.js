/* eslint-disable */
import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import imgAbout from '../../assets/landing/About-image.jpg';
import imgTrial from '../../assets/landing/Trials-image.jpg';
import imgAccess from '../../assets/landing/RequestAccess-LP.jpg';
import icon from '../../assets/landing/LP_ReadMore.svg';
import iconAbout from '../../assets/landing/LP_About_Fullarticle.Arrow.svg';
import texturebg from '../../assets/landing/BackgroundTexture-LP.jpg'
import l9dg from '../../assets/landing/Cases-LP.jpg';
import herobg800 from '../../assets/landing/heroGraphic/heroGraphic800.png';
import herobg1000 from '../../assets/landing/heroGraphic/heroGraphic1000.png';
import herobg1200 from '../../assets/landing/heroGraphic/heroGraphic1200.png';
import herobg1400 from '../../assets/landing/heroGraphic/heroGraphic1400.png';
import herobg1600 from '../../assets/landing/heroGraphic/heroGraphic1600.png';
import herobg1800 from '../../assets/landing/heroGraphic/heroGraphic1800.png';
import herobg2000 from '../../assets/landing/heroGraphic/heroGraphic2000.png';

import InteractiveHero  from '../../components/InteractiveHero/InteractiveHero';
import cn from '../../utils/classNameConcat';


const LandingController = ({ classes }) => (
  <div className={classes.page}>
   
      <div className={classes.hero}>
        <Grid container spacing={16} direction="row" className={classes.container}>
           <div className={classes.heroImage} />
           <div className={classes.heroInteractive}>
            <InteractiveHero />
          </div>
         </Grid>
      </div>

      <Grid container spacing={16} direction="row" className={cn(classes.container,classes.paddingTop5)}>
         <div className={classes.bannerTexture}>
                 Exploring, analyzing, and understanding the data from human cancer trials
         </div>
       </Grid>
        <Grid container spacing={16} direction="row" className={cn(classes.container,classes.paddingTop5)}>
            <div className={classes.redButtonSection}>
                <Link to="/cases" className={classes.redButton}>Explore</Link>
            </div>
      </Grid>

      <div className={classes.paper}>
      <Grid container  spacing={16} className={cn(classes.container,classes.about)}>
           <Grid item xs={12} md={3} >
              <div className={classes.aboutTitle}>
                About the Clinical Trials Data Commons (CTDC)
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.aboutImageSection}>
               <img src={imgAbout} className={classes.aboutImage} alt="CTDC about" />
            </Grid>
            <Grid item xs={12} md={3}  className={classes.aboutContent}>
               <div className={classes.texture}>
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
            </Grid>
      </Grid>
      <Grid container  spacing={16} direction="row" className={classes.container}>
        <Grid item xs={12} md={3} className={classes.program}>
              <div className={classes.programImg}>
                <img className={classes.image} src={imgTrial} alt="CTDC  Trials" />
              </div>
              <div className={classes.content}>
                <div className={classes.contentHeader}> Trials</div>
                <div className={classes.contentContainer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor</div>

              </div>
              <div className={classes.blueButton}>
                <div className={classes.blueButtonLeft}>
                  <img className={classes.icon} src={icon} alt="CTDC about " />
                  {' '}
                </div>
                <div className={classes.blueButtonRight}>
                  <Link to="/programs" className={classes.blueButtonText}>READ MORE</Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}  md={3} className={classes.studies}>
                    <div className={classes.programImg}>
                      <img className={classes.image} src={imgAccess} alt="CTDC Request ACCESS " />
                    </div>
                    <div className={classes.content}>
                      <div className={classes.contentHeader}> REQUEST ACCESS</div>
                      <div className={classes.contentContainer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor</div>

                    </div>
                    <div className={classes.blueButton}>
                      <div className={classes.blueButtonLeft}>
                        <img className={classes.icon} src={icon} alt="CTDC about " />
                        {' '}
                      </div>
                      <div className={classes.blueButtonRight}>
                        <Link to="/studies" className={classes.blueButtonText}>READ MORE</Link>
                      </div>
                    </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.casesSection}>
                  <div className={classes.casesText}>
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
            </Grid>
          </Grid>
      </div>
  </div>
);
const styles = (theme) => ({
  page: {
    marginTop: '-47px',
  },
  heroInteractive: {
  '@media (max-width: 400px)': {
      display: 'none',
    },
  },
  heroImage:{
    width:'100%',
    height: '600px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    background: `url(${herobg800})`,
     '@media (max-width: 400px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      height: '200px',
      background: `url(${herobg1000})`,
    },
    '@media (min-width: 1000px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      background: `url(${herobg1000})`,
    },
    '@media (min-width: 1200px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      background: `url(${herobg1200})`,
    },
    '@media (min-width: 1400px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      background: `url(${herobg1400})`,
    },
    '@media (min-width: 1600px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      background: `url(${herobg1600})`,
    },
    '@media (min-width: 1800px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      background: `url(${herobg1800})`,
    },
    '@media (min-width: 2000px)': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      background: `url(${herobg2000})`,
    },
  },
  paper: {
    backgroundSize: 'cover',
    backgroundImage: `url(${texturebg})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    padding: '80px 15px',
  },
  container: {
    fontFamily: 'Raleway, sans-serif',
    margin: '0 auto',
    width: '100%',
  },

  bannerTexture:{
    color:'#4898B4',
    fontFamily:'Raleway',
    fontSize:'19px',
    fontWeight:'600',
    textAlign:'center',
    margin:'0 auto',
    letterSpacing: '0.050pt',
    textTransform:'uppercase',
    width: '100%',
    '@media (min-width: 1200px)': {
       fontSize:'1em',
    },
    '@media (min-width: 1400px)': {
        fontSize:'1.25em',
    },
    '@media (min-width: 1600px)': {
         fontSize:'1.5em',
        
    },
    '@media (min-width: 1800px)': {
        fontSize:'1.75em',
        
    },
    '@media (min-width: 2000px)': {
        fontSize:'2em',
    },
  },
  redButtonSection:{
    margin:'0 auto -15px auto',
    background:'#C53B27',
    width:'179px',
    height:'47px',
    borderRadius:'50px',
    textAlign:'center',
    '@media (min-width: 1200px)': {
       height:'44px',
       width:'179px',
    },
    '@media (min-width: 1400px)': {
        height:'55px',
        width:'179px',
    },
    '@media (min-width: 1600px)': {
        height:'66px',
        width:'225px',
    },
    '@media (min-width: 1800px)': {
         height:'75px',
         width:'270px',
    },
    '@media (min-width: 2000px)': {
         height:'82px',
         width:'315px',
    },
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
    '@media (min-width: 1200px)': {
       fontSize:'1em',
       lineHeight:'44px',
    },
    '@media (min-width: 1400px)': {
        fontSize:'1.25em',
        lineHeight:'55px',
    },
    '@media (min-width: 1600px)': {
         fontSize:'1.5em',
        lineHeight:'66px',
    },
    '@media (min-width: 1800px)': {
        fontSize:'1.75em',
        lineHeight:'75px',
    },
    '@media (min-width: 2000px)': {
        fontSize:'2em',
        lineHeight:'85px',
    },
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

  


  aboutImage: {
    padding: '5px',
    height: '100%',
    width: '100%',
  },
  aboutImageSection: {
    
  },
  aboutTitle: {
    background: '#0B2731',
    color: '#FFFFFF',
    fontSize: '20px',
    textTransform: 'uppercase',
    fontFamily: 'Oswald',
    marginLeft: '-8px',
    marginTop: '10%',
    position: 'absolute',
    width: '32%',
    padding: '2% 14% 2% 8%',
    minHeight: '80px',
    minWidth: '300px',
   '@media (min-width: 1200px)': {
       fontSize:'1em',
    },
    '@media (min-width: 1400px)': {
        fontSize:'1.5em',
    },
    '@media (min-width: 1600px)': {
         fontSize:'1.5em',
    },
    '@media (min-width: 1800px)': {
        fontSize:'1.75em',
    },
    '@media (min-width: 2000px)': {
        fontSize:'2em',
    },
  },
  landingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100% !important'
  },
  contentLeft: {
    float: 'left',
    paddingRight: '10px',
  },
  about: {
    backgroundColor: '#20506A',
    width: '100% !important',
    marginBottom: '15px',
  },
  image: {
    width: '100%',
  },
  aboutContent: {
    background: '#20506A',
    color: '#fff',
    fontFamily: '"Open Sans"',
  },
  texture: {
    fontSize: '15px',
    padding: '10% 5%',
    lineHeight: '18px',
    '@media (min-width: 1200px)': {
       fontSize:'1em',
       lineHeight: '20px',
    },
    '@media (min-width: 1400px)': {
         fontSize:'1.15em',
         lineHeight: '25px',
    },
   
    '@media (min-width: 1600px)': {
         fontSize:'1.35em',
         lineHeight: '28px',
    },

     '@media (min-width: 1800px)': {
         fontSize:'1.5em',
         lineHeight: '31px',
    },
    '@media (min-width: 2000px)': {
        fontSize:'1.65em',
        lineHeight: '35px',
    },
  },
  aboutButtonSection: {
    background: '#20506A',
    height: '71px',
    paddingLeft: '5%',
  },
  imgIconAbout: {
    width: '49px',
  },

  iconAbout: {
    width: '9px',
    height: '17px',
    marginTop: '12px',
    marginLeft: '18px',
    '@media (min-width: 1200px)': {
        height: '17px',
        marginTop: '12px',
        marginLeft: '18px',
    },
    '@media (min-width: 1400px)': {
          marginTop: '11px',
          marginLeft: '16px',
    },
    '@media (min-width: 1600px)': {
        marginTop: '14px',
          marginLeft: '18px',
    },

    '@media (min-width: 2000px)': {
         marginTop: '15px',
          marginLeft: '19px',
    },
  },

  aboutButtonLeft: {
    float: 'left',
    background: '#C53B27',
    height: '40px',
    width: '40px',
    '@media (min-width: 1200px)': {
         height: '40px',
          width: '40px',
    },
   
    '@media (min-width: 1600px)': {
          height: '45px',
          width: '45px',
    },

    '@media (min-width: 2000px)': {
         height: '50px',
        width: '50px',
    },
  },
  aboutButtonRight: {
    background: '#894439',
    float: 'left',
    height: '40px',
    width: '132px',
    '@media (min-width: 1200px)': {
         height: '40px',
          width: '132px',
    },

    '@media (min-width: 1600px)': {
          height: '45px',
          width: '160px',
    },

    '@media (min-width: 2000px)': {
         height: '50px',
         width: '180px',
    },
  },
  aboutButton: {
    color: '#ffffff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '40px',
    paddingLeft: '20px',
    boxShadow: 'none',
    '@media (min-width: 1200px)': {
       fontSize:'1em',
       lineHeight:'40px',
    },

    '@media (min-width: 1600px)': {
        fontSize:'1.15em',
        lineHeight:'45px',       
    },
   
    '@media (min-width: 2000px)': {
        fontSize:'1.3em',
        lineHeight:'50px',    
    },
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
    fontSize: '25px',
    fontWeight: '500',
    lineHeight: '27px',
    padding: '10px 0',
    textTransform: 'uppercase',
    '@media (min-width: 1200px)': {
       fontSize:'1em',
       lineHeight:'28px',
    },

    '@media (min-width: 1600px)': {
        fontSize:'1.5em',
        lineHeight:'35px',       
    },
   
    '@media (min-width: 2000px)': {
        fontSize:'2em',
        lineHeight:'40px',    
    },
  },
  contentContainer: {
    color: '#010101',
    fontFamily: 'Lato',
    fontSize: '15px',
    paddingLeft:'2px',
    paddingBottom: '2%',
    paddingRight: '2%',
    '@media (min-width: 1200px)': {
       fontSize:'1em',
    },
    '@media (min-width: 1600px)': {
        fontSize:'1.3em',
    },
    '@media (min-width: 2000px)': {
        fontSize:'1.6em',
    },
  },
 
  program: {
    paddingLeft: '0px !important',
  },
  programImg: {
    background: '#fff',
  },
  studies: {
     paddingLeft: '0px !important',
  },

  casesSection: {
    marginTop: '9px',
    marginBottom: '9px',
    backgroundImage: `url(${l9dg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '230px',
    '@media (max-width: 768px)': {
      minHeight: '430px',
      backgroundSize: '100% 100%',
    },

  },
  casesText:{
    marginLeft: '60%',
    marginTop: '15px',
     '@media (max-width: 700px)': {
       marginLeft: '40%',
       marginTop: '15px',
       paddingLeft:'5px',
     
    },

  },
  greybuttonSection: {
    height: '40px',
    width: '150px',
    backgroundColor: '#20506A',
    marginTop: '20px',
    '@media (min-width: 1200px)': {
       width: '176px',
       height: '45px',
    },
    '@media (min-width: 1600px)': {
        width: '180px',
        height: '45px',
    },
    '@media (min-width: 2000px)': {
       width: '186px',
       height: '45px',
    },
  },

  icon: {
    width: '20px',
    marginTop: '13px',
    marginLeft: '28px',
     '@media (min-width: 1200px)': {
       width: '20px',
       marginLeft: '28px',
    },
    '@media (min-width: 1600px)': {
        width: '22.5px',
        marginTop: '14px',
    },
    '@media (min-width: 2000px)': {
        width: '25px',
         marginTop: '15px',
    },
  },


  blueButton: {
    background: '#5396AA',
    height: '45px',
     '@media (min-width: 1200px)': {
       height: '45px',
    },
    '@media (min-width: 1600px)': {
        height: '50px',
    },
    '@media (min-width: 2000px)': {
        height: '55px',
    },
  },
  blueButtonText:{
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    color: '#FFFFFF',
    paddingLeft: '8px',
    lineHeight: '45px',
    textDecoration: 'none',
     '@media (min-width: 1200px)': {
       fontSize: '15px',
       lineHeight: '45px',
    },
    '@media (min-width: 1600px)': {
        fontSize: '18px',
        lineHeight: '50px',
    },
    '@media (min-width: 2000px)': {
        fontSize: '20px',
        lineHeight: '55px',
    },
  },
  blueButtonLeft: {
    float: 'left',
  },
  blueButtonRight: {
    float: 'left',
    color: '#fff',
  },
  greyContentHeader: {
    color: '#20506A',
    fontFamily: 'Oswald',
    fontWeight: '500',
    fontSize: '25px',
    lineHeight: '25px',
    padding: '25px 0px 10px 0',
    textTransform: 'uppercase',
    '@media (min-width: 1200px)': {
        fontSize: '32px',
        lineHeight: '32px',
    },
    '@media (min-width: 1600px)': {
        fontSize: '45px',
        lineHeight: '45px',
    },
    '@media (min-width: 2000px)': {
        fontSize: '50px',
        lineHeight: '50px',
    },
  },
  greyContent: {
    width: '90%',
    color: '#010101',
    fontFamily: 'Lato',
    fontSize: '15px',
    lineHeight: '18px',
    '@media (min-width: 1200px)': {
       fontSize: '1em',
       lineHeight: '18px',
    },
    '@media (min-width: 1600px)': {
         fontSize: '1.3em',
        lineHeight: '28px',
    },
    '@media (min-width: 2000px)': {
         fontSize: '1.6em',
         lineHeight: '32px',
    },
  },
  greyIcon: {
    width: '20px',
    marginTop: '11px',
    marginLeft: '28px',
     '@media (min-width: 1200px)': {
       width: '20px',
       marginTop: '15px',
    },
    '@media (min-width: 1600px)': {
        width: '22.5px',
        marginTop: '12px',
    },
    '@media (min-width: 2000px)': {
        width: '25px',
         marginTop: '10px',
    },
  },
  greybutton: {

    width: '71px',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    marginLeft: '8px',
    '&:hover': {
      color: '#ffffff',
    },
    lineHeight: '40px',

    '@media (min-width: 1200px)': {
        fontSize: '15px',
        lineHeight: '45px',
    },
    '@media (min-width: 1600px)': {

        fontSize: '18px',
        lineHeight: '45px',
    },
    '@media (min-width: 2000px)': {

        fontSize: '20px',
        lineHeight: '45px',
    },
  },
  paddingBottom50: {
    paddingBottom: '50px',
  },
  paddingTop5: {
    padding: '3% 2% 0 2%',
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
