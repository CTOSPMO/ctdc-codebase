import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import axios from 'axios';
import YAMLData1 from './My-YAML-Content.yaml';
import l9dg from '../../assets/about/About_Purpose.png';
import Body from './BodyView';
import Header from '../../components/About/HeaderView';
import Stats from '../../components/Stats/AllStatsController';


const YAMLbuildtime = () => {
  const [data1, setData] = useState([]);


  useEffect(async () => {
    const result = await axios(YAMLData1);
    const yamlData2 = yaml.safeLoad(result.data);
    const supportObj = yamlData2.find(({ page }) => page === '/purpose');
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
