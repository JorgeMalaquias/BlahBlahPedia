import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCreatePost from "../hooks/api/useCreatePost";
import { update, updateUrlGetPosts } from "../../redux/post/slice";
import Style from "./style";

export function NewPost() {
    const username = window.localStorage.getItem("username");
    const { updateStatus } = useSelector((rootReducer) => rootReducer.postReducer);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [creatingPost, setCreatingPost] = useState(false);
    const { createPost } = useCreatePost();
    const dispatch = useDispatch();

    async function handlePostCreation(event) {
        event.preventDefault();
        setCreatingPost(true);
        try {
            const data = {
                username,
                title,
                content
            }
            await createPost(data);
            alert('Post created!');
            setTitle("");
            setContent("");
            dispatch(updateUrlGetPosts("https://dev.codeleap.co.uk/careers/?limit=15"));
            dispatch(update(!updateStatus));
        }
        catch (err) {
            alert('It was not possible to create the post!');
        };
        setCreatingPost(false);
    }

    return (
        <Style.NewPostForm isAnyFieldEmpty={(title === "" || content === "")} onSubmit={handlePostCreation}>
            <h1>What’s on your mind?</h1>
            <h3>Title</h3>
            <input value={title} type="text" placeholder="Ex: Hello world" required onChange={(e) => setTitle(e.target.value)} />
            <h3>Content</h3>
            <textarea value={content} placeholder="Ex: Content here" required onChange={(e) => setContent(e.target.value)} cols="30" rows="10"></textarea>
            {(creatingPost) ?
                <button type="submit" disabled={true}>Creating...</button>
                :
                <button type="submit" disabled={(title === "" || content === "")}>Create</button>
            }
        </Style.NewPostForm>
    );
}