import { useSelector } from "react-redux";

export function PostsFeed() {
    const { userName } = useSelector((rootReducer) => rootReducer.userReducer);
    return (
        <div>
            PostsFeed not implemented. But {userName} is on!
        </div>
    );
}