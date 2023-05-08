import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { NewPost } from "../../components/new-post";
import { PostsFeed } from "../../components/posts-feed";
import Style from "./style";

export function MainScreen() {
    const { username } = useSelector((rootReducer) => rootReducer.userReducer);
    const navigate = useNavigate();

    /*useEffect(() => {
        if (!username) {
            console.log('eeei')
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);*/

    return (
        <Style.Page>
            <Header />
            <NewPost />
            <PostsFeed />
        </Style.Page>
    );
}