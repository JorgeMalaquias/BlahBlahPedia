import { memo } from "react";
import Style from "./style";
import { TbTrashXFilled } from "react-icons/tb";
import { RxPencil2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { selectPostToDelete, selectPostToEdit } from "../../redux/post/slice";

function Post({ id, title, content, username, createdAt }) {
    const userLogged = window.localStorage.getItem("username");
    const dispatch = useDispatch();

    function handleDeletePost() {
        dispatch(selectPostToDelete(id));
    }
    function handleEditPost() {
        dispatch(selectPostToEdit(id));
    }

    function calculatingTime() {
        const milliseconds = Date.parse(new Date()) - Date.parse(createdAt);
        const minutes = milliseconds / 60000;
        const hours = minutes / 60;
        const days = hours / 24;

        if (days >= 2) {
            return `${Math.floor(days)} days ago`;
        }
        if (days >= 1) {
            return `Yesterday`;
        }
        if (hours >= 2) {
            return `${Math.floor(hours)} hours ago`;
        }
        if (hours >= 1) {
            return `1 hour ago`;
        }
        if (minutes >= 2) {
            return `${Math.floor(minutes)} minutes ago`;
        }
        if (minutes >= 1) {
            return `1 minute ago`;
        }
        return "Just now";
    }

    return (
        <Style.Post>
            <Style.Header>
                <div>{title}</div>
                {(username === userLogged) ?
                    <div>
                        <TbTrashXFilled style={{ marginRight: "30px" }} onClick={handleDeletePost} />
                        <RxPencil2 onClick={handleEditPost} />
                    </div> :
                    <></>
                }
            </Style.Header>
            <Style.Body>
                <Style.PostInfos>
                    <div>@{username}</div>
                    <div>{calculatingTime()}</div>
                </Style.PostInfos>
                <Style.Content>{content}</Style.Content>
            </Style.Body>
        </Style.Post>
    );
}

export default memo(Post);