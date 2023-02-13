import React, { useState } from 'react'
import { MapWrap, Title, Desc, IndiaMap, Mark } from './MapElement'
import map from '../../../assets/map.png'
import mark from '../../../assets/yellowIcon.png'

const Map = () => {
    return (
        <MapWrap>
            <Title>
                Our Presence
            </Title>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Desc>
            <IndiaMap >
                <img src={map} alt="India Map" useMap='#markMap' />
                <map name='markMap'>
                    <area shape="circle" coords="34,44,270,350" alt="Computer" href="computer.htm" />
                    <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />
                    <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm" />
                </map>
            </IndiaMap>
            {/* <Mark src={mark} /> */}
        </MapWrap>
    )
}

export default Map