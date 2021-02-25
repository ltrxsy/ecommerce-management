import React from 'react';
import { Layout } from 'antd';
import AdminHeader from '../header/header';

const { Footer, Sider, Content } = Layout;

const Admin =(props)=>{
    return(
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <AdminHeader {...props}/> 
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    )
}

export default Admin;