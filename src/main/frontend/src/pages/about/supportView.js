/* eslint-disable */
import React, { useState, useEffect }  from 'react';
import { withStyles, Link } from '@material-ui/core';
import Stats from '../../components/Stats/AllStatsController';
import Header from '../../components/About/HeaderView';
import l9dg from '../../assets/about/About_Support.jpg';
import Body from '../../components/About/BodyView';
import axios from 'axios';
import yaml from 'js-yaml';

const SupportView = ({ classes }) => {

  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'https://raw.githubusercontent.com/CBIIT/bento-static-content/master/CTDC/tmp.yaml',
    );
    
    const yamlData = yaml.safeLoad(result.data);
    setData(yamlData.section);
  }, []);


  return (

  <>
    <Stats />
    <Header title="Support" />
    <Body data={{
      img: l9dg,
      body: (
        <div>
        {
          data.map(item => (
          <p dangerouslySetInnerHTML={{__html: item }} />
          ))
        }
        </div>),
    }}
    />
  </>
   
  );
};

const styles = () => ({
  linkIcon: {
    width: '20px',
    verticalAlign: 'sub',
    margin: '0px 0px 0px 2px',
  },
  link: {
    color: '#0296C9',
    fontWeight: 'bolder',
    '&:hover': {
      color: '#0296C9',
      fontWeight: 'bolder',
      textDecoration: 'none',
    },
  },
  title: {
    color: '#0B3556',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});


export default withStyles(styles, { withTheme: true })(SupportView);
