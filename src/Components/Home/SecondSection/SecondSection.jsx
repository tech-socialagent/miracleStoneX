import React from 'react'
import {SectionWrap, Left, Title, Desc, Righ, Element} from './SecondSectionElement'
import diamond from '../../../assets/diamond.svg'


const SecondSection = () => {
    return (
        <SectionWrap>
            <Left>
                <Title>What Makes Miracle Stonex Special</Title>
                <Desc>Miracle StoneX is a combination of quality products, expert services, and personalised attention makes it a standout in the industry.<br /><br />
                    We use State-Of-The-Art technology and equipment to extract and process the granite stones, ensuring that each piece is of the highest quality and durability.<br /><br />
                    We've got a team of experienced and skilled workers who are dedicated to providing excellent customer service and ensuring that each project is completed to the customer's satisfaction.<br /><br />
                    Our company has a wide range of colours, patterns, and textures to choose from, allowing customers to select the perfect stone for their project. Furthermore, the company offers customised services, such as custom cutting and shaping, to ensure that each piece fits perfectly into the customer's design.</Desc>
            </Left>
            <Righ>
                <Element src={diamond} />
            </Righ>
        </SectionWrap>
    )
}

export default SecondSection