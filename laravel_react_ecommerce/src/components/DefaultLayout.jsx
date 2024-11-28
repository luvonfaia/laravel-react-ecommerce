/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";
import axios from "axios";
import axiosClient from "../axiosClient";

export default function DefaultLayout(){
    
    const {user, token, setUser, setToken} = useStateContext();
    if(!token){
       return <Navigate to='/login'/>
    }
    
    const onLogout = (ev) => {
        axiosClient.get('/logout')
        .then(({}) => {
           setUser(null)
           setToken(null)
        })
    }

    useEffect(() => {
        axiosClient.get('/user')
          .then(({data}) => {
             setUser(data)
          })
      }, [])
   
   
    

    
    return(
        <div id="defaultLayout">
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        {user.name}
                        <a href="#" onClick={onLogout} role="button" className="btn-logout">Logout</a>
                    </div>
                </header>
                <main>
                 <Outlet />
                </main>
                
            </div>

            
        </div>
    )
}