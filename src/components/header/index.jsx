import { useSelector } from "react-redux";

export function Header() {
    const { userName } = useSelector((rootReducer) => rootReducer.userReducer);
    return (
        <div>
            Header not implemented. But {userName} is on!
        </div>
    );
}