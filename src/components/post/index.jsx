import { memo } from "react";
import Style from "./style";
import { TbTrashXFilled } from "react-icons/tb";
import { RxPencil2 } from "react-icons/rx";
import { useSelector } from "react-redux";

function Post({ title, content, username, createdAt }) {
    const { username: userLogged } = useSelector((rootReducer) => rootReducer.userReducer);
    return (
        <Style.Post>
            <Style.Header>
                <div>{title}</div>
                {(username === userLogged) ?
                    <div>
                        <TbTrashXFilled style={{ marginRight: "30px" }} />
                        <RxPencil2 />
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