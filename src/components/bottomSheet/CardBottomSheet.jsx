import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { Board, SheetButton } from "./CommentBottomSheetStyle";
import { ReactComponent as More } from "../../images/ic-more.svg";
import { useNavigate } from "react-router";
import axios from "axios";

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");

export default function PostBottomSheet({ view, id }) {
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
              navigate(`/posts/${id}/put`);
            }}
          >
            수정
          </ul>
          <ul
            style={{ color: "#F82323" }}
            onClick={() => {
              const confirm = window.confirm("게시글을 지우시겠습니까?");
              if (confirm) {
                const config = {
                  headers: {
                    Authorization: accessToken,
                    "Refresh-Token": refreshToken,
                  },
                };
                axios
                  .delete(
                    `https://bkyungkeem.shop/api/businessCards/${id}`,
                    config
                  )
                  .then(function (response) {
                    console.log(response);
                    view.filter((x) => x.id !== response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
                  .then(function () {
                    // always executed
                  });
                alert("삭제되었습니다.");
                navigate("/cards");
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
