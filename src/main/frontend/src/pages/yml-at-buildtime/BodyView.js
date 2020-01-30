import React from 'react';
import { Grid, withStyles, Link } from '@material-ui/core';
import externalIcon from '../../assets/about/About-ExternalLink.svg';

const AboutBody = ({ classes, data }) => {
  // const content = data.content ? data.content : [{ item: '' }];
  // console.log('content');
  console.log(data.content);
  return (
    <div className={classes.container}>
      <Grid container spacing={16} direction="row" className={classes.aboutSection}>
        <Grid item lg={3} md={3} sm={12} xs={12} className={classes.leftSection}>
          <img className={classes.img} src={data.img} alt="about" />
        </Grid>
        <Grid item lg={9} md={9} sm={12} xs={12} className={classes.rightSection}>
          {data.content ? data.content.map((para) => (
            <>
              <div className={classes.text}>
                { para.item.split('**').map((item) => (
                  (item != null && (/\[(.+)\]\((.+)\)/g.test(item)) ? (
                    <>
                      <Link
                        title="Cloud Resources."
                        target="_blank"
                        rel="noreferrer"
                        href={item.match(/\((.*)\)/).pop()}
                        color="inherit"
                        className={classes.link}
                      >
                        {item.match(/\[(.*)\]/).pop()}
                      </Link>
                      <img
                        src={externalIcon}
                        alt="outbounnd web site icon"
                        className={classes.linkIcon}
                      />
                    </>
                  ) : item
                  )))}
              </div>
              <br />
            </>
          )) : ''}
        </Grid>
      </Grid>
    </div>
  );
};

const styles = () => ({
  container: {
    margin: '16px auto 16px auto',
    color: '#000000',
    fontFamily: '"Open Sans"',
    fontSize: '15px',
    lineHeight: '22px',
    maxWidth: '1440px',
  },
  text: {
    // height: '476px',
    // width: '675px',
    color: '#000000',
    fontFamily: '"Open Sans"',
    fontSize: '15px',
    lineHeight: '22px',
  },
  title: {
    color: '#0B3556',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  rightSection: {
    padding: '8px 25px !important',
    float: 'left',
  },
  leftSection: {
    float: 'left',
  },
  aboutSection: {
    margin: '60px auto 60px auto',
  },
  img: {
    width: '100%',
  },
  linkIcon: {
    width: '20px',
    verticalAlign: 'sub',
    margin: '0px 0px 0px 2px',
  },
  link: {
    color: '#0296C9',
    '&:hover': {
      color: '#0296C9',
    },
  },
});

AboutBody.defaultProps = {
  classes: {},
  data: {
    content: [],
  },
};

export default withStyles(styles)(AboutBody);
