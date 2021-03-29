import React from "react";
import { Progress } from "antd";
import Title from "../../commons/components/title/title";

const StatusSummary = (props) => {

  const {data}=props;

  return (
    <div>
      <Title text="Status" level="level2" />
      <Progress type="dashboard" percent={data?.monthly} />
      <Progress type="dashboard" percent={data?.yearly} gapDegree={30} />
    </div>
  );
};

export default StatusSummary;
