import React from 'react';
import { Layout } from 'antd';
import AdminHeader from '../header/header';
import LeftMenu from '../menu/menu';
import './admin.less';

const { Footer, Sider, Content } = Layout;


const Admin =(props)=>{
    return(
    <Layout>
      <Sider style={{width: 240}}>
        <LeftMenu {...props} />
      </Sider>
      <Layout>
        <AdminHeader {...props} /> 
        <Content>{props.children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    )
}

export default Admin;