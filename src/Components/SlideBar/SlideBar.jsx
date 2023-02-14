import React, { useState } from 'react'
import { SlideWrap, Links, Item, ItemProduct, GetInTouch, Btn } from './SlideBarEle'

function SlideBar({ isOpen, setIsOpen }) {

    return (
        <SlideWrap isOpen={isOpen} >
            <Links >
                <Item onClick={() => setIsOpen(false)} to='/'>
                    Home
                </Item>
                <Item onClick={() => setIsOpen(false)} to='/aboutUs'>
                    About Us
                </Item>
                <ItemProduct onClick={() => setIsOpen(false)} to='/#products'>
                    Products
                </ItemProduct>
                <GetInTouch to='/GetInTouch' onClick={() => setIsOpen(false)}>
                    <Btn>
                        Get In Touch
                    </Btn>

                </GetInTouch>
            </Links>
        </SlideWrap>
    )
}

export default SlideBar