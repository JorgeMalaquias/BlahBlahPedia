import { useSelector } from "react-redux";
import useGetPosts from "../../components/hooks/api/useGetPosts";
import Style from "./style";
import Post from "../post";
import { useEffect, useState } from "react";


export function PostsFeed() {
    const { getPosts } = useGetPosts();
    const { updateStatus } = useSelector((rootReducer) => rootReducer.postReducer);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        async function listPosts() {
            try {
                const response = await getPosts();
                console.log(response);
                setPosts(response);
            }
            catch (error) {
                console.log(error);
            };
        }
        listPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateStatus]);

    return (
        <>
            {(posts) ? <Style.Container>
                {posts.results.map((e) => { return <Post key={e.id} id={e.id} title={e.title} content={e.content} username={e.username} createdAt={e.created_datetime} /> })}
            </Style.Container> : <div>Loading posts...</div>}
        </>

    );
}
