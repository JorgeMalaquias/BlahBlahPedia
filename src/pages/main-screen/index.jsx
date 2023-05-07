import { Header } from "../../components/header";
import { NewPost } from "../../components/new-post";
import { PostsFeed } from "../../components/posts-feed";
import Style from "./style";

export function MainScreen() {
    return (
        <Style.Page>
            <Header />
            <NewPost />
            <PostsFeed />
        </Style.Page>
    );
}