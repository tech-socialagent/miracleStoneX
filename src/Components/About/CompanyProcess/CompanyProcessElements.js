import styled from "styled-components";

export const Wrap = styled.div`
    padding: 5%;
    padding-top: 3%;
`;

export const Title = styled.div`
    font-style: italic;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    color: var(--primary-color);

`;

export const Desc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;
`;

export const Process = styled.div``;

export const ProcessLine = styled.div``;

export const ProcessContent = styled.div`
    display: flex;
    padding-top: 2%;
    @media screen and (max-width: 750px){
       flex-direction: column-reverse;
    }

`;

export const Content = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    width: 70%;
    @media screen and (max-width: 750px){
       width: 100%;
       font-size: 20px;
    }


`;

export const Image = styled.img`
    width: 30%;
    @media screen and (max-width: 750px){
        width: 100%;
    }

`;

export const NumberWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 5%;
    @media screen and (max-width: 750px){
       flex-wrap: wrap;
    }

    
`;

export const NumberContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
`;

export const Number = styled.div`
    font-weight: 500;
    font-size: 40px;
    color: var(--secondary-color);
    @media screen and (max-width: 750px){
       font-size: 20px;
    }

`;

export const Text = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    @media screen and (max-width: 750px){
       font-size: 20px;
    }
`;




