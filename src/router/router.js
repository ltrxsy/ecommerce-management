import React, { useState} from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import LoginForm from '../components/login/login';
import Admin from '../components/admin/admin';
// import Home from '../components/home/home';
import GoodsSummary from '../components/goodssummary/goodssummary';
import FoodCategory from '../components/foodcategory/foodcategory';
import ClothesCategory from '../components/clothescategory/clothescategory';
import EmployeeSummary from '../components/employeesummary/employeesummary';
import EmployeeSalary from '../components/employeesalary/employeesalary';

const Router =()=>{
    let [user, setUser]=useState(null)

    const commonProps ={user, setUser}

    return (
        <HashRouter>
            <Route path='/admin' render={ ()=>{
                if (user !== null || localStorage.getItem('user')){
                    console.log("test")
                    return (
                        <Admin {...commonProps} >
                            <Switch>
                                <Route exact path="/admin/goodssummary" component={GoodsSummary} />
                                <Route exact path="/admin/foodcategory" component={FoodCategory} />
                                <Route exact path="/admin/clothescategory" component={ClothesCategory} />
                                <Route exact path="/admin/employeesummary" component={EmployeeSummary} />
                                <Route exact path="/admin/employeesalary" component={EmployeeSalary} />
                            </Switch>
                        </Admin>
                    )
                } else {
                    return <LoginForm {...commonProps}/>
                }
            }}/>
            <Route path="/signin" exact render={ ()=>
                {return <LoginForm {...commonProps}/>
            }}/>
        </HashRouter>
    )
}

export default Router;