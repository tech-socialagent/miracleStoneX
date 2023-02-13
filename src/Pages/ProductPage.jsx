import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Footer from '../Components/Footer/Footer';
import { graniteData } from '../Components/Granite/GraniteData';
import { marbleData } from '../Components/Granite/MarbleData';
import NavBar from '../Components/NavBar/NavBar';


const ProductPage = ({page}) => {
    const { pathname } = useLocation();
    let product = '';
    console.log("page",page);

    let data = [];
    if (page == 'granite') {
        data = graniteData
        product = 'granite';
        console.log('granite');
    }
    else {
        data = marbleData;
        product = 'marble'
        console.log('marble');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <NavBar />
            {data.map((item, key) => {
                if ("/" + product + "/product/" + item.id == pathname)

                    return (
                        <div key={key}>
                            <h1 style={{ color: 'var(--secondary-color)', paddingLeft: '3%', fontSize: '40px' }} >{item.Name}</h1>
                            <img style={{ width: '94%', padding: '3%', paddingBottom: '0', paddingTop: '0' }} src={item.image} alt="" />
                            <p style={{ width: '94%', padding: '3%', paddingTop: '0' }} >{item.desc}</p>
                        </div>
                    )
            })}
            <Footer />
        </div>
    )
}

export default ProductPage