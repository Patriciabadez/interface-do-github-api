
import "react-calendar-heatmap/dist/styles.css"
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../pages/Profile';
import Repo from '../pages/Repo';
import GlobalStyles from '../styles/GlobalStyles';


const Router = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element ={<Profile />}/>
            <Route path='/:username' element ={<Profile />}/>
            <Route path='/:username/:reposname' element ={<Repo />}/>
        </Routes>
        {/* <Footer/> */}
        <GlobalStyles/>
        </BrowserRouter>
    )
}
export default Router