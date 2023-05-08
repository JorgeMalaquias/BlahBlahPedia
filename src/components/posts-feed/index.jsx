import { useSelector } from "react-redux";
import useGetPosts from "../../components/hooks/api/useGetPosts";

export function PostsFeed() {
    const { username } = useSelector((rootReducer) => rootReducer.userReducer);
    const { posts } = useGetPosts();
    console.log(posts);
    return (
        <>
            {(posts) ? <div style={{ display: 'flex', flexDirection: 'column' }}>
                {posts.results.map((e) => { return <div>e.title</div> })}
            </div> : <div>Loading posts...</div>}
        </>

    );
}