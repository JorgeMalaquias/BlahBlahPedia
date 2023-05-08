import styled from 'styled-components';

const NewPostForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 334px;
    width: 752px;
    border-radius: 16px;
    padding: 24px;
    background-color: #FFFFFF;
    color: #000000;
    border: 1px solid #999999;
    h1{
        width:100%;
        text-align: left;
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0em;
    }
    h3{
        width:100%;
        text-align: left;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
    input{
        width: 704px;
        border-radius: 8px;
        border: 1px solid #777777;
    }
    input:nth-child(3){
        height: 32px;
        
    }
    input:nth-child(5){
        height: 74px;
        text-align: top;
    }
    button{
        height: 32px;
        width: 120px;
        border-radius: 8px;
        background-color: #7695EC;
        color: #FFFFFF;
        border: none;
        opacity: ${props => (props.isAnyFieldEmpty) ? 0.3 : 1};
    }
    input::placeholder{
        position: absolute;
        top: 0;
        padding: 7px;
    }
`

const Style = {
    NewPostForm
};

export default Style;