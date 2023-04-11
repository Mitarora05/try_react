import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

type DataPoint = {
  key: any;
  value: any;
  maxValue: number | null;
  label: any;
};

type ChartProps = {
  dataPoints: DataPoint[];
};

const Chart: React.FC<ChartProps> = (props) => {
  return (
    <div className="chart">
      {/* {props.dataPoints.map((dataPoint: DataPoint) => (
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))} */}
    </div>
  );
};

export default Chart;