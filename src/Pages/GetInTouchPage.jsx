import React,{useEffect} from 'react'
import GetInTouch from '../Components/GetInTouch/GetInTouch'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import { useLocation } from "react-router-dom";

const GetInTouchPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <NavBar />
            <GetInTouch />
            <Footer />
        </>
    )
}

export default GetInTouchPage