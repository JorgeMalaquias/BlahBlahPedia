import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    padding: 27px 37px;
    background-color: #7695EC;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color:  #FFFFFF;
    div{
        font-size: 16px;
        text-align: right;
    }
    @media(max-width:550px){
        font-size: 18px;
        h1{
            max-width: 130px;
        }
        > div > div{
            
        }
    }
`
const Logout = styled.div`
    cursor: pointer;
    :hover{
        font-size: 20px;
    }
`

const Style = {
    Header,
    Logout
};

export default Style;