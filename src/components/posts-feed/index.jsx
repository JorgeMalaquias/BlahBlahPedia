import { useSelector } from "react-redux";

export function PostsFeed() {
    const { username } = useSelector((rootReducer) => rootReducer.userReducer);
    return (
        <div>
            PostsFeed not implemented. But {username} is on!
        </div>
    );
}