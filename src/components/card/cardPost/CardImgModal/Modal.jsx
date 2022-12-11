import React from "react";
import "./Modal.css";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    <div className={open ? "openModal modal" : "modal"} onClick={close}>
      {open ? (
        <section>
          <header>{header}</header>
          <main>{props.children}</main>
          <footer></footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
