import { Header } from "../../components/header";
import { NewPost } from "../../components/new-post";
import { PostsFeed } from "../../components/posts-feed";

export function MainScreen() {
    return (
        <div>
            <Header />
            <NewPost />
            <PostsFeed />
        </div>
    );
}