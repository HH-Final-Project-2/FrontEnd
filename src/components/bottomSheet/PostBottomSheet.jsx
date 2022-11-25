import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { Board, SheetButton } from "./CommentBottomSheetStyle";
import { ReactComponent as More } from "../../images/ic-more.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { __deletePost } from "../../redux/modules/PostSlice";

export default function PostBottomSheet({ detail, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  return (
    <>
      <SheetButton>
        <More onClick={() => setOpen(true)} />
      </SheetButton>

      <BottomSheet
        open={open}
        onDismiss={() => {
          setOpen(false);
        }}
      >
        <Board>
          <ul
            onClick={() => {
              navigate(`/edit/${id}`);
            }}
          >
            수정
          </ul>
          <ul
            style={{ color: "#F82323" }}
            onClick={() => {
              const confirm = window.confirm("게시글을 지우시겠습니까?");
              if (confirm) {
                dispatch(__deletePost(detail.id));
                navigate("/community");
              } else {
                return;
              }
            }}
          >
            삭제
          </ul>
        </Board>
      </BottomSheet>
    </>
  );
}
