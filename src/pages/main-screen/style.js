import styled from 'styled-components';

const Page = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    > *{
        margin-bottom: 24px;
    }
    @media (max-width:850px){
        width: 100vw;
    }
`
const Style = {
    Page
};

export default Style;