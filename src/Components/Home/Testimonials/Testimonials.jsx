import React from 'react'
import { TestimonialsWrap, ReviewCarousel } from './TestimonialsElement'
import { Title, Desc } from '../Map/MapElement'


const Testimonials = () => {
    return (
        <TestimonialsWrap>
            <Title>
                Testimonials
            </Title>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Desc>
            <ReviewCarousel >
                <img src="" alt="testimonials img" />
            </ReviewCarousel>
        </TestimonialsWrap>
    )
}

export default Testimonials