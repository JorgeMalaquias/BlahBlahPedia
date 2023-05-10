import useAsync from "../useAsync";
import * as postApi from "../../../actions/requests/postApi";

export default function useDeletePost() {
    const {
        loading: deletePostLoading,
        error: deletePostError,
        act: deletePost,
    } = useAsync(postApi.deletePost, false);

    return {
        deletePostLoading,
        deletePostError,
        deletePost,
    };
}