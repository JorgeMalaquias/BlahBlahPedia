import styled from 'styled-components';

const NewPostForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 334px;
    min-height:334px;
    width: 752px;
    border-radius: 16px;
    padding: 24px;
    background-color: #FFFFFF;
    color: #000000;
    border: 1px solid #999999;
    > *{
        width:100%;
    }
    h1{
        text-align: left;
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0em;
    }
    h3{
        text-align: left;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
    input{
        border-radius: 8px;
        border: 1px solid #777777;
        height: 32px;
    }
    textarea{
        height: 74px;
        text-align: top;
        border-style: none;
        border-radius: 8px;
        border: 1px solid #777777;
    }
    button{
        height: 32px;
        width: 120px;
        border-radius: 8px;
        background-color: #7695EC;
        color: #FFFFFF;
        border: none;
        opacity: ${props => (props.isAnyFieldEmpty) ? 0.3 : 1};
        cursor: ${props => (props.isAnyFieldEmpty) ? 'auto' : 'pointer'};
    }
    input::placeholder, textarea::placeholder{
        top: 0;
        padding: 7px;
    }
    > div{
        display: flex;
        justify-content: flex-end;
    }
    @media (max-width:850px){
        width: 90%;
    }
`

const Style = {
    NewPostForm
};

export default Style;