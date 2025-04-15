import React, { use } from "react";
import {
  Area,
  Bar,
  BarChart,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const chartfetch = fetch("Recharts.json").then((res) => res.json());
const ResultCharts = () => {
  const charts = use(chartfetch);

  return (
    <div>
      <LineChart width={500} height={300} data={charts}>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis></YAxis>
        <Legend></Legend>
        <Line dataKey={"donation"} stroke="green"></Line>
        <Line dataKey={"expense"} stroke="red"></Line>
      </LineChart>
      <BarChart width={500} height={300} data={charts}>
        <XAxis dataKey={"month"} fill="black" stroke="black"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Bar dataKey="donation" fill="green" stroke="red"></Bar>
        <Bar dataKey="expense" fill="red" stroke="green"></Bar>
      </BarChart>
      <ComposedChart
      width={500}
      height={400}
      data={charts}
    //   margin={{
    //     top: 20,
    //     right: 20,
    //     bottom: 20,
    //     left: 20
    //   }}
    >
      
      <XAxis dataKey="month" />
      <YAxis />
      {/* <Tooltip /> */}
      <Legend />
      <Area type="monotone" dataKey="donation" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="expense" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="donation" stroke="#ff7300" />
      <Scatter dataKey="expense" fill="red" />
    </ComposedChart>
    </div>
  );
};

export default ResultCharts;
