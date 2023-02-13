import styled from "styled-components";

export const BannerWrap = styled.div`
    height: calc(100vh - 110px);
    position: relative;
`;
export const Video = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    /* top: 50%;
    left: 50%; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

`;
export const Title = styled.h1`
    
`;
export const Desc = styled.div`
   
`;