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

const employeeTable=props=>{
    let {columns,dataSource}=props

    const getTableHead=()=>{
        return Object.keys(columns[0]).map((item,index)=>{
            return <th>{item}</th>
        })
        
    }

    const getTableBody=()=>{
        return dataSource.map((item,idx)=>{
          return (
            <tr>
              <td>{item}</td>
            </tr>
          )
        })
      }

    return (
        <table>
            <thead>
                <tr>
                    {getTableHead()}
                </tr>
            </thead>
            <tbody>
                {getTableBody()}
            </tbody>
        </table>
    )
}




function EmployeeSummary(props) {
    const [data, setData]=useState(null)

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
            <Table dataSource={data.employees} columns={getColumns(data.employees)} />;
          </Breadcrumb>
        </div>
      );
}

export default EmployeeSummary;
