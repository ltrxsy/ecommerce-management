import React from "react";
import { Breadcrumb } from "antd";
import './goodssummary.less';
import CategorySummary from './categorysummay';
import SalesSummary from './salessummary';
import StatusSummary from './statussummary';

function GoodsSummary(props) {
  return (
    <div className="goods-summary">
      <Breadcrumb>
        <Breadcrumb.Item>Goods</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Summary</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <CategorySummary />
      <SalesSummary />
      <StatusSummary />
    </div>
  );
}

export default GoodsSummary;
