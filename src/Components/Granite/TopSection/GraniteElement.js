import styled from "styled-components";

export const SectionWrap = styled.div`
    padding: 5%;
    padding-top: 0;
    padding-bottom: 2%;
    display: flex;
`;
export const Left = styled.div`
    width: 70%;
    @media screen and (max-width: 750px){
       width: 100%;
    }
`;

export const Title = styled.div`
    font-style: italic;
    font-weight: 500;
    font-size: 36px;
    line-height: 48px;
    color: var(--primary-color);`;

export const Desc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;
`;

export const Right = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;

    img{
        height: 100%;
    }
    @media screen and (max-width: 750px){
       display: none;
    }
`;