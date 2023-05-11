import styled from 'styled-components';

const Modal = styled.div`
    height: 205px;
    width: 500px;
    border-radius: 16px;
    background-color:#FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 24px;
    font-family: 'Roboto', sans-serif;
    h1{
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0em;
        color:#000000;
    }
    @media (max-width:550px){
        width: 90%;
    }
`;

const SubscriptionForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 108px;
    h3{
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        width:100%;
    }
    input{
        height: 32px;
        border-radius: 8px;
        border: 1px solid #777777;
        width:100%;
    }
    button{
        height: 32px;
        width: 111px;
        border-radius: 8px;
        background-color: #7695EC;
        border:none;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        color:#FFFFFF;
        opacity: ${props => (props.isNameEmpty) ? 0.3 : 1};
        cursor: ${props => (props.isNameEmpty) ? 'auto' : 'pointer'};
    }
`



const Style = {
    Modal,
    SubscriptionForm
};

export default Style;