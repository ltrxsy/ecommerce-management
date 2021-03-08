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

const Router =()=>{
    let [user, setUser]=useState(null)

    const commonProps ={user, setUser}

    return (
        <HashRouter>
            <Route path='/admin' exact render={ ()=>{
                if (user !== null || localStorage.getItem('user')){
                    return (<Admin {...commonProps} >
                        <Switch>
                            <Route exact path="/admin/goodssummary" component={GoodsSummary} />
                        </Switch>
                    </Admin>)
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