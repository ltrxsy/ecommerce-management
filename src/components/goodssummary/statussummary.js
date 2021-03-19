import React from "react";
import { Progress } from "antd";
import Title from "../../commons/components/title/title";

const StatusSummary = () => {
  return (
    <div>
      <Title text="Status" level="level2" />
      <Progress type="dashboard" percent={75} />
      <Progress type="dashboard" percent={75} gapDegree={30} />
    </div>
  );
};

export default StatusSummary;
