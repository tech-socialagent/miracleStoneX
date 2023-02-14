import styled from "styled-components";

export const SectionWrap = styled.div`
    padding: 5%;
    padding-top: 0;
    display: flex;
    @media screen and (max-width: 750px){
       flex-direction: column;
       padding: 0;
    }
`;

export const Filter = styled.div`
    width: min-content;
    border-right: 1px #000 solid;
    padding-right: 3%;
    position: sticky;
    position: -webkit-sticky;
    top: 15%;
    height: max-content;
    

    @media screen and (max-width: 750px){
       border: none;
       position: relative;
    }
`;
export const FilterMobile = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    display: none;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-decoration-line: none;
    color: ${({ filterActive }) => (filterActive ? 'red' : '#000')};
    @media screen and (max-width: 750px){
       display: flex;
       align-items: center;
    }
`;

export const FilterDesktop = styled.div`
margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-decoration-line: underline;
    @media screen and (max-width: 750px){
       display: none;
    }
`;

export const Color = styled.div`
    display: block;
    h2{
        padding-left: 15px;
        font-weight: 600;
        font-size: 20px;
        line-height: 26px;
        color: var(--secondary-color);
        text-decoration-line: none;

    }
    h3{
        font-weight: 500;
        font-size: 18px;
        padding-left: 25px;
        display: flex;
        align-items: center;
    }
    h3:hover{
        cursor: pointer;
        color: var(--secondary-color);
    }
    @media screen and (max-width: 750px){
        display: ${({ filterActive }) => (filterActive ? 'flex' : 'none')};
        flex-direction: column;
        flex-wrap: wrap;
        height: 300px;
    }
`;

export const ProductWrap = styled.div`
    width: 92%;
    padding: 3%;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 750px){
       width: 100%;
       padding: 0;
       justify-content: center;
    }
`;

