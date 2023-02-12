import styled from "styled-components";

export const SectionWrap = styled.div`
    padding: 5%;
    padding-top: 0;
    display: flex;
`;

export const Filter = styled.div`
    width: min-content;
    border-right: 1px #000 solid;
    padding-right: 3%;
    position: sticky;
    position: -webkit-sticky;
    top: 30%;
    height: max-content;

    h2{
        font-style: italic;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        text-decoration-line: underline;
    }
`;

export const Color = styled.div`
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
        font-size: 20px;
        padding-left: 25px;
        display: flex;
        align-items: center;
    }
    h3:hover{
        cursor: pointer;
        color: var(--secondary-color);
    }
`;

export const ProductWrap = styled.div`
    width: 92%;
    padding: 3%;
    display: flex;
    flex-wrap: wrap;
`;

