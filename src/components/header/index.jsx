import { useSelector } from "react-redux";
import Style from "./style";

export function Header() {
    const { userName } = useSelector((rootReducer) => rootReducer.userReducer);
    return (
        <Style.Header>
            CodeLeap Network
        </Style.Header>
    );
}