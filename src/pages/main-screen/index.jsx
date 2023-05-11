import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeletePostModal } from "../../components/delete-post-modal";
import { EditPostModal } from "../../components/edit-post-modal";
import { Header } from "../../components/header";
import { NewPost } from "../../components/new-post";
import { PostsFeed } from "../../components/posts-feed";
import Style from "./style";

export function MainScreen() {
    const { postToDeleteId } = useSelector((rootReducer) => rootReducer.postReducer);
    const { postToEditId } = useSelector((rootReducer) => rootReducer.postReducer);
    const username = window.localStorage.getItem("username");
    const navigate = useNavigate();

    useEffect(() => {
        if (!username) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Style.Page>
                <Header />
                <NewPost />
                <PostsFeed />
                {(postToDeleteId) ? <DeletePostModal /> : <></>}
                {(postToEditId) ? <EditPostModal /> : <></>}
            </Style.Page>
        </>
    );
}