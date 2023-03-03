import React from 'react'
import { BannerWrap, Video, Title, Desc, Content } from './BannerElement';

const Banner = () => {
    return (
        <BannerWrap>
            <Video autoPlay loop muted >
                <source src="https://miraclestonex.s3.ap-south-1.amazonaws.com/video.mp4" type="video/mp4" />
            </Video>
            <Content>
            </Content>
        </BannerWrap>
    )
}

export default Banner
