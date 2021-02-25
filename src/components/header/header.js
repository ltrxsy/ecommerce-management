import React from 'react';
import { Layout, Button } from 'antd';
import './header.less';
import { withRouter } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// <NavLink to='/signin'>log out</NavLink> 
const { Header } = Layout;

const AdminHeader=(props)=>{
    const {history, setUser} = props;

    const logoutHandler = () => {
        history.push('/signin');
        setUser(null)
    }   

    return (
        <Header id='header'>
        <Button onClick={logoutHandler} type="link">Log Out</Button>
        </Header>
    )
}

export default withRouter(AdminHeader);