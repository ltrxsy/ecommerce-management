import React, { useState} from 'react';
import {
    HashRouter,
    Route
} from 'react-router-dom';
import LoginForm from '../components/login/login';
import Admin from '../components/admin/admin';


const Router =()=>{
    let [user, setUser]=useState(null)

    const commonProps ={user, setUser}

    return (
        <HashRouter>
            <Route path='/' exact render={ ()=>{
                if (user !== null || localStorage.getItem('user')){
                    return <Admin {...commonProps} />
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