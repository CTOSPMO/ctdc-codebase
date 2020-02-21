/* eslint-disable */

import React from 'react';
import { withStyles } from '@material-ui/core';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import cn from '../../utils/classNameConcat';
import icon from '../../assets/landing/animation/CTDCButton.png';

const dialSize = 180;
const dialLineWidth = 12;
const data = [
  { name: 'Group A', value: 400 },
];

const HorseShoe = ({ classes, transformAngle }) => (
  <>
  <div style={{ transform: `rotateZ(${transformAngle}deg)` }} className={classes.radialWrapper}>
  <PieChart width={160} height={160} >
  <Pie
    data={data}
    cx={80}
    cy={80}
    startAngle={45}
    endAngle={-225}
    innerRadius={60}
    outerRadius={75}
    fill="#E7E5E5"
    paddingAngle={1}
    dataKey="value"
  >
    {/* {
      data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
    } */}
    {/* <div>Ajay</div> */}
  </Pie>
</PieChart>
</div>
<div className={classes.radialWrapper1} >
  <img src={icon}></img>
</div>
</>
);

const styles = () => ({
  radialWrapper:{
    position: 'absolute',
    width: dialSize,
    height: dialSize,
    marginTop: '180px',
  },
  radialWrapper1: {
    width: '120px',
    height: '120px',
    position: 'absolute',
    float: 'left',
    marginTop: '206px',
    left: '24px',

  },
});


export default withStyles(styles)(HorseShoe);
