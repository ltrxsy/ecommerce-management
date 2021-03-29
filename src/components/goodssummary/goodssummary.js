import React, { useState, useEffect } from "react";
import { Breadcrumb } from "antd";
import './goodssummary.less';
import CategorySummary from './categorysummay';
import SalesSummary from './salessummary';
import StatusSummary from './statussummary';
import Axios from '../../commons/functions/axios';

function GoodsSummary(props) {
  let [data, setData]=useState({})

  useEffect(
    ()=>{
      Axios.get('/goods/summary').then(
        (res)=>{
          setData(res.data)
        }
      )
    },
    []
  )
  return (
    <div className="goods-summary">
      <Breadcrumb>
        <Breadcrumb.Item>Goods</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Summary</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <CategorySummary 
        data={data.category}
      />
      <SalesSummary data={data.sales} />
      <StatusSummary data={data.status} />
    </div>
  );
}

export default GoodsSummary;
