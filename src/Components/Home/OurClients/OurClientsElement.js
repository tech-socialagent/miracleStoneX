import styled from "styled-components";

export const OurClientWrap = styled.div`
    padding: 8%;
    padding-top: 3%;
    padding-bottom: 5%;
    border-bottom: solid 1px;
    height: 100%;
`;
export const TopSection = styled.div`
    display: flex;
`;
export const LeftSection = styled.div``;
export const RightSection = styled.div`
    display: flex;
    align-items:center ;
`;
export const LogoElement = styled.img`
    height: 150px;
    padding-right: 60px;
`;
export const ClientsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 20px;
    img{
        width: calc(100% / 5);
        height: auto;
    }
`;
