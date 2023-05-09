import styled from 'styled-components';

const Post = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: fit-content;
    width: 752px;
    border-radius: 16px;
    color: #000000;
    border: 1px solid #999999;
    overflow: hidden;
    margin-bottom:24px;
    > * {
        padding: 24px;
    }
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    background-color: #7695EC;
    object-fit: cover;
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    background-color: #FFFFFF;
`
const PostInfos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 0 24px;
    margin-bottom: 16px;
    color: #777777;
    > div{
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0em;
    }
    > div:nth-child(1){
        font-weight: 700;
    }
    > div:nth-child(2){
        font-weight: 400;
    }
`
const Content = styled.text`
    padding: 0 24px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    color: #000000;
`

const Style = {
    Post,
    Header,
    Body,
    PostInfos,
    Content
};

export default Style;