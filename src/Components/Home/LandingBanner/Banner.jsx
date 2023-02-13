import React from 'react'
import { BannerWrap, Video, Title, Desc, Content } from './BannerElement';
import video from '../../../assets/video.mp4'

const Banner = () => {
    return (
        <BannerWrap>
            <Video autoPlay loop muted >
                <source src={video} type="video/mp4" />
            </Video>
            {/* <Content>
                <Title>WELCOME TO MIRACLE STONEX</Title>
                <Desc>India s  largest granite exports firm.</Desc>
            </Content> */}

        </BannerWrap>
    )
}

export default Banner