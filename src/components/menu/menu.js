import React from 'react';
import { Menu } from 'antd';
import { TeamOutlined, ShoppingOutlined, GiftOutlined, SkinOutlined, SolutionOutlined, AccountBookOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
}



const LeftMenu = (props) =>{
    return (
        <Menu onClick={handleClick} style={{ width: 200 }} theme="dark" mode="vertical">
            <SubMenu key="sub1" icon={<GiftOutlined />} title="Goods">
                <Menu.ItemGroup key='summary' icon={<SolutionOutlined />} title={<NavLink to="/admin/goodssummary">Summary</NavLink>} />
            <Menu.ItemGroup icon={<ShoppingOutlined />} title="Category">
                <Menu.Item key="Food" icon={<GiftOutlined />}>
                    <NavLink to="/admin/foodcategory">Food</NavLink>
                </Menu.Item>
                <Menu.Item key="Clothes"  icon={<SkinOutlined />}>
                <NavLink to="/admin/clothescategory">Clothes</NavLink>
                </Menu.Item>
            </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Employee">
                <Menu.Item key="5" icon={<SolutionOutlined />}>
                <NavLink to="/admin/employeesummary">Summary</NavLink>
                </Menu.Item>
                <Menu.Item key="6" icon={<AccountBookOutlined />}>
                <NavLink to="/admin/employeesalary">Salary</NavLink>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default LeftMenu;