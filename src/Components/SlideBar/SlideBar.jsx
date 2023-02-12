import React, { useState } from 'react'
import { SlideWrap, Links, Item, ItemProduct} from './SlideBarEle'

function SlideBar({isOpen, setIsOpen}) {

    return (
        <SlideWrap isOpen={isOpen} >
            <Links >
                <Item onClick={()=> setIsOpen(false)} to='/aboutUs'>
                    About Us
                </Item>
                <ItemProduct onClick={()=> setIsOpen(false)} to='/#products'>
                    Products
                </ItemProduct>
                <Item to='/' onClick={()=> setIsOpen(false)}>
                    Get In Touch
                </Item>
            </Links>
        </SlideWrap>
    )
}

export default SlideBar