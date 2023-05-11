import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width:850px){
        width: 90%;
    }
`
const PaginationActions = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    margin-bottom: 24px;
    button{
        color: #7695EC;
        font-size: 32px;
        background: none;
    }
    button:nth-child(1){
        opacity: ${props => (props.previous) ? 1 : 0.3};
        cursor: ${props => (props.previous) ? 'pointer' : 'auto'};
    }
    button:nth-child(2){
        opacity: ${props => (props.next) ? 1 : 0.3};
        cursor: ${props => (props.next) ? 'pointer' : 'auto'};
    }
`


const Style = {
    Container,
    PaginationActions
};

export default Style;