import useAsync from "../useAsync";
import * as postApi from "../../../actions/requests/postApi";

export default function useGetPosts() {
    const {
        loading: getPostsLoading,
        error: getPostsError,
        act: getPosts,
        data: posts
    } = useAsync(postApi.getPosts, false);

    return {
        getPostsLoading,
        getPostsError,
        getPosts,
        posts
    };
}