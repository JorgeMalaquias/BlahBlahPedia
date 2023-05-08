import { useState } from "react";
import { useSelector } from "react-redux";
import useCreatePost from "../hooks/api/useCreatePost";
import Style from "./style";

export function NewPost() {
    const { username } = useSelector((rootReducer) => rootReducer.userReducer);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { createPostLoading, createPost } = useCreatePost();
    const [creatingPost, setCreatingPost] = useState(false);

    async function handlePostCreation(event) {
        event.preventDefault();
        setCreatingPost(!creatingPost);
        console.log(creatingPost);
        try {
            const data = {
                username,
                title,
                content
            }
            const response = await createPost(data);

        }
        catch (err) {
            alert('It was not possible to create the post!');
        };
        setCreatingPost(!creatingPost);
        console.log(creatingPost);
    }
    return (
        <Style.NewPostForm isAnyFieldEmpty={(title === "" || content === "")} onSubmit={handlePostCreation}>
            <h1>What’s on your mind?</h1>
            <h3>Title</h3>
            <input value={title} type="text" placeholder="Ex: Hello world" required onChange={(e) => setTitle(e.target.value)} />
            <h3>Content</h3>
            <input value={content} type="text" placeholder="Ex: Content here" required onChange={(e) => setContent(e.target.value)} />
            <button type="submit" disabled={(title === "" || content === "")}>Create</button>
        </Style.NewPostForm>
    );
}