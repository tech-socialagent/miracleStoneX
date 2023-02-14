import styled from "styled-components";

export const Wrap = styled.div`
    padding-top: 5%;
    padding-bottom: 5%;
    background: #F8E7E2;
    display: flex;
    align-items: center;
    @media screen and (max-width: 750px){
      flex-direction: column;
      align-items: flex-start;
    }
`;

export const Left = styled.div`
    font-weight: 500;
    font-size: 25px;
    width: 60%;
    padding-left: 10%;

    h1{
        background: linear-gradient(180deg, #CD181E 0%, #FBAE17 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    }
    @media screen and (max-width: 750px){
        font-size: 16px;
        width: 90%;
    }
`;

export const Right = styled.div`
    width: 40%;
    @media screen and (max-width: 750px){
      width: 100%;
      display: flex;
      justify-content: center;
}    
`;

export const FormWrap = styled.form`
    background: #fff;
    width: 60%;
    padding: 15px;
    display: flex;
    flex-direction: column;

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin: 0;
    }
    input{
        margin-top: 5%;
        height: 30px;
        border: none;
        border-bottom: 1px #000 solid;
    }
    input:focus{
        outline: none;
        background: #F0F0F0;
    }
    textarea{
        margin-top: 5%;
        height: 50px;
        border: none;
        font-size: 20px;
        border-bottom: 1px #000 solid;
    }
    textarea:focus{
        outline: none;
        background: #F0F0F0;
    }
    @media screen and (max-width: 750px){
        width: 80%;
    }
`;

export const TopSection = styled.div`
    display: flex;
    align-items: center;
    h2{
        width: 80%;
        margin: 0;
    }
    img{
        height: 50px;
    }
    
`;

