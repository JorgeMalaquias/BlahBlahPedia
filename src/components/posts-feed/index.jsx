import { useDispatch, useSelector } from "react-redux";
import useGetPosts from "../../components/hooks/api/useGetPosts";
import Style from "./style";
import Post from "../post";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { updateUrlGetPosts, update } from "../../redux/post/slice";


export function PostsFeed() {
    const { getPosts } = useGetPosts();
    const { updateStatus } = useSelector((rootReducer) => rootReducer.postReducer);
    const { url } = useSelector((rootReducer) => rootReducer.postReducer);
    const [posts, setPosts] = useState([]);
    const [previousUrl, setPreviousUrl] = useState("");
    const [nextUrl, setNextUrl] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        async function listPosts() {
            try {
                const response = await getPosts(url);
                setPosts(response.results);
                setPreviousUrl(response.previous);
                setNextUrl(response.next);
            }
            catch (error) {
                console.log(error);
            };
        }
        listPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateStatus]);

    function handleRenderNextPosts() {
        dispatch(updateUrlGetPosts(nextUrl));
        dispatch(update(!updateStatus));
    }
    function handleRenderPreviousPosts() {
        dispatch(updateUrlGetPosts(previousUrl));
        dispatch(update(!updateStatus));
    }

    return (
        <>
            {(posts.length > 0) ?
                <Style.Container>
                    {posts.map((e) => { return <Post key={e.id} id={e.id} title={e.title} content={e.content} username={e.username} createdAt={e.created_datetime} /> })}
                    <Style.PaginationActions previous={previousUrl} next={nextUrl}>
                        <button disabled={(!previousUrl)} onClick={handleRenderPreviousPosts}>
                            <BsFillArrowLeftCircleFill />
                        </button>
                        <button disabled={!nextUrl} onClick={handleRenderNextPosts}>
                            <BsFillArrowRightCircleFill />
                        </button>
                    </Style.PaginationActions>
                </Style.Container>
                :
                <div>Loading posts...</div>
            }
        </>
    );
}
