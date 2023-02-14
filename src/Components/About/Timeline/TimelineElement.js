import styled from "styled-components";

export const Wrap = styled.div`
    padding: 5%;
    padding-top: 3%;
    @media screen and (max-width: 750px){
      padding: 3%;
      margin-top: 5%;
    }
`;

export const Title = styled.div`
    font-style: italic;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    color: var(--primary-color);
`;

export const YearBtns = styled.div`
    display: flex;
    justify-content: center;
    padding: 3%;
`;

export const Content = styled.div`
    padding-left: 20%;
    padding-right: 20%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    @media screen and (max-width: 750px){
        padding-left: 0;
        padding-right: 0;
        font-size: 15px;
    }
`;

export const Year1 = styled.button`
    width: 84px;
    height: 45px;
    background: ${({btn}) => (btn == '2015' ? 'var(--secondary-color)' : '#AFAFAF')};
    border: #DADADA 4px;
    margin: 1px;
    color: #fff;
    cursor: pointer;
`;

export const Year2 = styled.button`
    width: 84px;
    height: 45px;
    background: ${({btn}) => (btn == '2016' ? 'var(--secondary-color)' : '#AFAFAF')};
    border: #DADADA 4px;
    margin: 1px;
    color: #fff;
    cursor: pointer;
`;

export const Year3 = styled.button`
    width: 84px;
    height: 45px;
    background: ${({btn}) => (btn == '2017' ? 'var(--secondary-color)' : '#AFAFAF')};
    border: #DADADA 4px;
    margin: 1px;
    color: #fff;
    cursor: pointer;
`;

export const Year4 = styled.button`
    width: 84px;
    height: 45px;
    background: ${({btn}) => (btn == '2018' ? 'var(--secondary-color)' : '#AFAFAF')};
    border: #DADADA 4px;
    margin: 1px;
    color: #fff;
    cursor: pointer;
`;

