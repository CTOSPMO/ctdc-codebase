import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import axios from 'axios';
import YAMLData from '../../content/prod/aboutPagesContent.yaml';
import l9dg from '../../assets/about/About_CRDC.png';
import AboutBody from '../../components/About/AbouBodyView';
import Stats from '../../components/Stats/AllStatsController';

const ABOUT_CONTENT_URL = process.env.REACT_APP_ABOUT_CONTENT_URL;


const YAMLbuildtime = () => {
  const [data1, setData] = useState([]);


  useEffect(async () => {
    let resultData = [];
    try {
      const result = await axios.get(ABOUT_CONTENT_URL);
      resultData = yaml.safeLoad(result.data);
    } catch (error) {
      const result = await axios(YAMLData);
      resultData = yaml.safeLoad(result.data);
    }
    const supportObj = resultData.find(({ page }) => page === '/crdc');
    setData(supportObj);
  }, []);

  return (
    <>
      <Stats />
      <AboutBody data={{
        img: l9dg,
        title: data1.title,
        content: data1.content,
        table: data1.table,
      }}
      />
    </>
  );
};
export default YAMLbuildtime;
