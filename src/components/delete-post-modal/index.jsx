import { useDispatch, useSelector } from "react-redux";
import { update, unSelectPostToDelete } from "../../redux/post/slice";
import useDeletePost from "../hooks/api/useDeletePost";
import Style from "./style";

export function DeletePostModal() {
    const { postToDeleteId } = useSelector((rootReducer) => rootReducer.postReducer);
    const { updateStatus } = useSelector((rootReducer) => rootReducer.postReducer);
    const { deletePost } = useDeletePost();
    const dispatch = useDispatch();
    async function handleDeletePost() {
        try {
            await deletePost(postToDeleteId);
            alert('Post deleted!');
            dispatch(unSelectPostToDelete());
            dispatch(update(!updateStatus));
        }
        catch (error) {
            console.log(error);
        }
    }
    function unSelectPost() {
        dispatch(unSelectPostToDelete);
    }
    return (
        <Style.Container>
            <Style.Modal>
                <h1>Are you sure you want to delete this item?</h1>
                <Style.Options>
                    <button onClick={unSelectPost}>Cancel</button>
                    <button onClick={handleDeletePost}>Delete</button>
                </Style.Options>
            </Style.Modal>
        </Style.Container>
    );
}