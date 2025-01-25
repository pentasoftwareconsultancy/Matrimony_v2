import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Sun', ThisWeek: 24000, LastWeek: 20000 },
  { name: 'Mon', ThisWeek: 30000, LastWeek: 25000 },
  { name: 'Tue', ThisWeek: 28000, LastWeek: 22000 },
  { name: 'Wed', ThisWeek: 35000, LastWeek: 27000 },
  { name: 'Thu', ThisWeek: 40000, LastWeek: 32000 },
];

const StatisticsGraph = () => {
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="ThisWeek" fill="#8884d8" />
      <Bar dataKey="LastWeek" fill="#82ca9d" />
    </BarChart>
  );
};

export default StatisticsGraph;
