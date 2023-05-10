import Style from "./style";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export function Header() {
    const username = window.localStorage.getItem("username");
    const navigate = useNavigate();

    function handleLogout() {
        window.localStorage.removeItem("username");
        navigate("/");
    }

    return (
        <Style.Header>
            CodeLeap Network
            <div>
                <div>Subscribed as @{username}</div>
                <Style.Logout onClick={handleLogout}>Logout <RiLogoutBoxLine /></Style.Logout>
            </div>
        </Style.Header>
    );
}