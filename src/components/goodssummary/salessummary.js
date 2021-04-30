import React from "react";
import { Chart, Line, Point, Tooltip, Legend } from "bizcharts";
import Title from "../../commons/components/title/title";


function SalesSummary(props) {

  const {data} =props;
  
  return (
    <div className="sales-graph">
      <Title text="Sales" level="level2" />
      <Chart
        padding={[30, 20, 60, 40]}
        autoFit
        height={320}
        data={data}
        interactions={["element-active"]}
      >
        <Point position="month*revenue" color="year" shape="circle" />
        <Line
          shape="smooth"
          position="month*revenue"
          color="year"
          label="revenue"
        />
        <Tooltip shared showCrosshairs />
        <Legend
          background={{
            padding: [5, 100, 5, 36],
            style: {
              fill: "#eaeaea",
              stroke: "#fff",
            },
          }}
        />
      </Chart>
    </div>
  );
}

export default SalesSummary;
