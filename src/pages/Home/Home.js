import { useState, useContext } from 'react';
import {CoursesContext} from '../../ContextProviders/CoursesContext';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Navbar from '../../components/Navbar/Navbar';

import './Home.css';
const Home = () => {
    const courses = useContext(CoursesContext);
    return (
        <>
            <Navbar />
            <div className="container-fuild" style={{marginTop: '82px'}}>
                <div className="container">
                    
                </div>
            </div>
        </>
    )
}

export default Home;