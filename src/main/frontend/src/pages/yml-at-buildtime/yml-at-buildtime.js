import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import axios from 'axios';
import YAMLData from '../../content/prod/aboutPagesContent.yaml';
import l9dg from '../../assets/about/About_Purpose.png';
import Body from './BodyView';
import Header from '../../components/About/HeaderView';
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
    const supportObj = resultData.find(({ page }) => page === '/purpose');
    setData(supportObj);
  }, []);

  return (
    <>
      <Stats />
      <Header title={data1.title} />
      <Body data={{
        img: l9dg,
        content: data1.content,
      }}
      />
    </>
  );
};
export default YAMLbuildtime;
