import React,{useState} from 'react'
import {MapWrap, Title, Desc, IndiaMap} from './MapElement'
import map from '../../../assets/map.png'

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
                <img src={map} alt="India Map" />
            </IndiaMap>
        </MapWrap>
    )
}

export default Map