import styled from "styled-components";

export const MapWrap = styled.div`
    padding: 8%;
    padding-top: 3%;
    padding-bottom: 5%;
    border-bottom: solid 1px;
    
`;

export const Title = styled.h1`
    font-weight: 500;
    font-size: 36px;
    color: var(--primary-color);
    font-style: italic;
`;

export const Desc = styled.div`
    font-weight: 400;
    line-height: 24px;
    font-size: 18px;
    font-style: normal;
    width: 65%;
    @media screen and (max-width: 750px){
       width: 100%;
    }

`;

export const IndiaMap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: max-content;
    margin-top: 5%;
    img {
        width: 80%;
        /* height: 100%; */
    }
`;