import styled from "styled-components";

export const SectionWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8%;
    padding-top: 3%;
    padding-bottom: 5%;
    border-bottom: solid 1px;

    @media screen and (max-width: 750px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5%;
    }

`;
 
export const Left = styled.div`
    width: 60%;

    @media screen and (max-width: 750px){
       width: 100%;
    }

`;
 
export const Title = styled.div`
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
    margin-top: 5%;

    @media screen and (max-width: 750px){
       font-size: 15px;
    }
`;
 
export const Righ = styled.div`
    width: 40%;
    display: flex;
    justify-content: flex-end;

     @media screen and (max-width: 750px){
        display: flex;
        justify-content: center;
        width: 100%;
    }

`;
 
export const Element = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
`;
 