import React, { useState, useEffect } from "react";
import { Breadcrumb, Table } from "antd";
import Axios from '../../commons/functions/axios';

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

const getColumns=(datasource=[])=>{
    let items
    if (datasource.length) {
        items=Object.keys(datasource[0])
    }
    else{
        items=datasource
    }
	// const items=
    // datasource.length? Object.keys(datasource[0]): datasource
  	items.splice(0,1)
  
  let columns=[]
  for (let i=0; i<items.length; i++){
  	columns.push ({title:items[i], dataIndex:items[i], key:items[i]})
  }  
	
  return columns
}

function EmployeeSummary(props) {
    const [data, setData]=useState({})

    useEffect(
        ()=>{
          Axios.get('/employees/1').then(
            (res)=>{
             setData(res.data)
             console.log(res.data)
            }
          )
        },
        []
      )
      return (
        <div className="employee-summary">
          <Breadcrumb>
            <Breadcrumb.Item>Employees</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Summary</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Table dataSource={data?.employees} columns={getColumns(data.employees)} />
        </div>
      );
}

export default EmployeeSummary;
