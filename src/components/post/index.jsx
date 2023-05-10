import { memo } from "react";
import Style from "./style";
import { TbTrashXFilled } from "react-icons/tb";
import { RxPencil2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, selectPostToDelete, selectPostToEdit } from "../../redux/post/slice";

function Post({ id, title, content, username, createdAt }) {
    const { username: userLogged } = useSelector((rootReducer) => rootReducer.userReducer);
    const dispatch = useDispatch();
    function handleDeletePost() {
        dispatch(selectPostToDelete(id));
    }
    function handleEditPost() {
        dispatch(selectPostToEdit(id));
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
                    <div>{createdAt}</div>
                </Style.PostInfos>
                <Style.Content>{content}</Style.Content>
            </Style.Body>
        </Style.Post>
    );
}

export default memo(Post);