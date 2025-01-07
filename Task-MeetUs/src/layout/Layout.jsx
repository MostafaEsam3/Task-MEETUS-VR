import React from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import Footer from "././Footer/Footer.jsx"


const Layout = () => {
    return (
<>
<section>
<Header/>
<Outlet/>
<Footer/>

</section>






</>    );
}

export default Layout;
