import styled from "styled-components";

export const Wrap = styled.div`
    padding: 5%;
    padding-top: 1%;
    font-style: normal;
`;

export const TopSection = styled.div`
    display: flex;
    @media screen and (max-width: 750px){
       flex-direction: column;
    }

`;

export const Left = styled.div`
    width: 65%;
    @media screen and (max-width: 750px){
       width: 100%;
    }

`;

export const Right = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 750px){
        width: 100%;
    }

`;

export const Title = styled.div`
    font-style: italic;
    font-weight: 500;
    font-size: 36px;
    line-height: 48px;
    color: var(--primary-color);
`;

export const Desc = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;
`;

export const SecondSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    margin-top: 30px;
    padding-left: 5%;
    padding-right: 5%;
    gap: 10px;
    @media screen and (max-width: 750px){
        gap: 20px;      
    }
`;

export const Card = styled.div`
    margin-top: 20px;
    border: 2px solid;
    border-radius: 10px;
    padding: 0.5%;
    padding-top: 2%;
    padding-bottom: 2%;
    transition: 0.3s;
    flex: 1 1 16rem;
    min-width: 200px;
    max-width: 300px;
    height: 250px;

    &:hover{
        background: linear-gradient(90deg, rgba(205, 24, 30, 0.7) 4.66%, rgba(251, 174, 23, 0.7) 101.61%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        border-color: rgba(251, 174, 23, 0.7);
    }
    @media screen and (max-width: 750px){
        padding-top: 0%;
        padding-bottom: 0%;
        height: 200px;

    }

`;
export const CardTitle = styled.div`
    font-style: italic;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.7);

`;

export const CardDesc = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    margin-top: 10px;
`;

