import styled from "styled-components";

export const Wrap = styled.div`
    padding: 5%;
    padding-top: 1%;
    font-style: normal;
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Left = styled.div`
    width: 65%;
`;

export const Right = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
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
    justify-content: space-around;
    text-align: center;
    margin-top: 30px;
`;

export const Card = styled.div`
    width: 22%;
    margin-top: 20px;
    border: 2px solid;
    border-radius: 10px;
    padding: 0.5%;
    padding-top: 2%;
    padding-bottom: 2%;
    transition: 0.3s;

    &:hover{
        background: linear-gradient(90deg, rgba(205, 24, 30, 0.7) 4.66%, rgba(251, 174, 23, 0.7) 101.61%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        border-color: rgba(251, 174, 23, 0.7);
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

