import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
    const loc = useLocation()
    useEffect(()=>{
        if(loc.pathname == '/' ){
            document.title = 'Donation Home'
        } else {
            document.title = `Donation ${loc.pathname.replace("/", '-')} `
        }
    })
    return (
        <div className="" >
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;