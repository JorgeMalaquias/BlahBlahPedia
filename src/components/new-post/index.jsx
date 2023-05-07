import { useSelector } from "react-redux";
import Style from "./style";

export function NewPost() {
    const { userName } = useSelector((rootReducer) => rootReducer.userReducer);
    return (
        <Style.NewPostForm>
            <h1>What’s on your mind?</h1>
            <h3>Title</h3>
            <input type="text" placeholder="Ex: Hello world" />
            <h3>Content</h3>
            <input type="text" placeholder="Ex: Content here" />
            <button type="submit">Create</button>
        </Style.NewPostForm>
    );
}