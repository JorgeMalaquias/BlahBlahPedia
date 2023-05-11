import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left:0;
    bottom:0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #777777CC;
    font-family: 'Roboto', sans-serif;
`
const Modal = styled.div`
    height: 146px;
    width: 660px;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #FFFFFF;
    @media (max-width:760px){
        width: 90%;
    }
    h1{
        width: 100%;
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        color: #000000;
    }
`
const Options = styled.div`
    button{
        height: 32px;
        width: 120px;
        border-radius: 8px;
        border: none;
        @media (max-width:350px){
            height: 21px;
            width: 80px;
        }
    }
    button:nth-child(1){
        border: 1px solid #999999;
        background-color: #FFFFFF;
        color: #000000;
    }
    button:nth-child(2){
        margin-left: 16px;
        background-color: #FF5151;
        color: #FFFFFF;
    }
`
const Style = {
    Container,
    Modal,
    Options
};

export default Style;