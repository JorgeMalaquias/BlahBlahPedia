import useAsync from "../useAsync";
import * as postApi from "../../../actions/requests/postApi";

export default function useEditPost() {
    const {
        loading: editPostLoading,
        error: editPostError,
        act: editPost,
    } = useAsync(postApi.editPost, false);

    return {
        editPostLoading,
        editPostError,
        editPost,
    };
}