import useAsync from "../useAsync";
import * as postApi from "../../../actions/user/requests/postApi";

export default function useCreatePost() {
    const {
        loading: createPostLoading,
        error: createPostError,
        act: createPost,
    } = useAsync(postApi.createPost, false);

    return {
        createPostLoading,
        createPostError,
        createPost,
    };
}