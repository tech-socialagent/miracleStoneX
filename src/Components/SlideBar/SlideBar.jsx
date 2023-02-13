import React, { useState } from 'react'
import { SlideWrap, Links, Item, ItemProduct, GetInTouch} from './SlideBarEle'

function SlideBar({isOpen, setIsOpen}) {

    return (
        <SlideWrap isOpen={isOpen} >
            <Links >
                <Item onClick={()=> setIsOpen(false)} to='/'>
                    Home
                </Item>
                <Item onClick={()=> setIsOpen(false)} to='/aboutUs'>
                    About Us
                </Item>
                <ItemProduct onClick={()=> setIsOpen(false)} to='/#products'>
                    Products
                </ItemProduct>
                <GetInTouch to='/GetInTouch' onClick={()=> setIsOpen(false)}>
                    Get In Touch
                </GetInTouch>
            </Links>
        </SlideWrap>
    )
}

export default SlideBar