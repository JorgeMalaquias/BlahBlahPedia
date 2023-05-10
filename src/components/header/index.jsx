import Style from "./style";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { updateUrlGetPosts, update } from "../../redux/post/slice";
import { useDispatch } from "react-redux";

export function Header() {
    const username = window.localStorage.getItem("username");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogout() {
        window.localStorage.removeItem("username");
        dispatch(updateUrlGetPosts("https://dev.codeleap.co.uk/careers/?limit=15"));
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