import styled from "styled-components";

export const CardWrap = styled.div`
    padding: 2%;
    flex: 1 1 16rem;
    margin: 10px 20px;
    box-shadow: 0 0 15px rgba(0,0,0,0.4);
    height: max-content;
    align-self: normal;
    border: 1px #000 solid;
    max-width: 300px;
    min-width: 200px;
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export const Title = styled.div`
    font-weight: 500;
    font-size: 32px;
    color: var(--secondary-color);
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;

`;

export const Desc = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
`;

export const Btn = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button{
        width: 160px;
        height: 48px;
        background: var(--secondary-color);
        border: none;
        border-radius: 15px;
    }
`;

