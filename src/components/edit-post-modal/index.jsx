import { useDispatch, useSelector } from "react-redux";
import useEditPost from "../hooks/api/useEditPost";
import { update, unSelectPostToEdit } from "../../redux/post/slice";
import Style from "./style";
import { useState } from "react";

export function EditPostModal() {
    const { postToEditId } = useSelector((rootReducer) => rootReducer.postReducer);
    const { updateStatus } = useSelector((rootReducer) => rootReducer.postReducer);
    const { editPost } = useEditPost();
    const dispatch = useDispatch();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    async function handleEditPost(event) {
        event.preventDefault();
        try {
            const data = {
                title,
                content
            }
            await editPost(postToEditId, data);
            alert('Post edited!');
            dispatch(unSelectPostToEdit());
            dispatch(update(!updateStatus));
        }
        catch (error) {
            console.log(error);
        }
    }
    function unSelectPost() {
        dispatch(unSelectPostToEdit());
    }
    return (
        <Style.Container>
            <Style.Modal onSubmit={handleEditPost}>
                <h1>Edit item</h1>
                <h3>Title</h3>
                <input value={title} type="text" placeholder="Ex: Hello world" required onChange={(e) => setTitle(e.target.value)} />
                <h3>Content</h3>
                <textarea value={content} placeholder="Ex: Content here" required cols="30" rows="10" onChange={(e) => setContent(e.target.value)}></textarea>
                <Style.Options>
                    <button onClick={unSelectPost}>Cancel</button>
                    <button type="submit">Save</button>
                </Style.Options>
            </Style.Modal>
        </Style.Container>
    );
}