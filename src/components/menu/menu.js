import React from 'react';
import { Menu } from 'antd';
import { TeamOutlined, ShoppingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
}


{/* <NavLink to={item.key}>{item.title}</NavLink> */}

const LeftMenu = (props) =>{
    return (
        <Menu onClick={handleClick} style={{ width: 200 }} theme="dark" mode="vertical">
            <SubMenu key="sub1" icon={<ShoppingOutlined />} title="Goods">
            <NavLink to="/admin/goodssummary">
                <Menu.ItemGroup title="Summary" />
            </NavLink>
            <Menu.ItemGroup title="Category">
                <Menu.Item key="Food">Food</Menu.Item>
                <Menu.Item key="Clothes">Clothes</Menu.Item>
            </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Employee">
                <Menu.Item key="5">Summary</Menu.Item>
                <Menu.Item key="6">Salary</Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default LeftMenu;