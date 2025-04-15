import React, { use } from "react";
// import { AwesomeButton } from "react-awesome-button";
// import AwesomeButtonProgress from "react-awesome-button/src/components/AwesomeButtonProgress";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const AxiosResult = ({ ResultChart }) => {
  const charts = use(ResultChart);
  const chart = charts.data;

  const newChart = chart.map((data) => {
    const students = {
      name: data.name,
      chemistry: data.result.chemistry,
      physics: data.result.physics,
      english: data.result.english,
    };
    const avarage =
      (students.chemistry + students.physics + students.english) / 3;
    students.avg = parseInt(avarage);
    return students;
  });
//   console.log(newChart);
  return (
    <div>
      <BarChart data={newChart} width={730} height={250}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={"avg"} fill="white"></Bar>
        <Bar dataKey={"physics"} fill="Black"></Bar>
        <Bar dataKey={"chemistry"} fill="red"></Bar>
        <Bar dataKey={"english"} fill="blue"></Bar>
        <Legend></Legend>
        <Tooltip fill="gray"></Tooltip>
      </BarChart>
      {/* <AwesomeButtonProgress
        type="secondary"
        size="medium"
      >primary</AwesomeButtonProgress> */}
      {/* <AwesomeButton type="primary">Primary</AwesomeButton> */}
    </div>
  );
};

export default AxiosResult;
