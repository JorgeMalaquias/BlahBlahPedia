import { useSelector } from "react-redux";

export function NewPost() {
    const { userName } = useSelector((rootReducer) => rootReducer.userReducer);
    return (
        <div>
            NewPost not implemented. But {userName} is on!
        </div>
    );
}