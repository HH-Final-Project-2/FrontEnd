import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { __viewGet } from "../../redux/modules/CardsSlice";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");

const ViewMainDetailPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const view = useSelector((state) => state.PostReducer.viewList.data);
  console.log(view);
  const viewArr = [view];

  useEffect(() => {
    dispatch(__viewGet(id));
  }, [dispatch]);

  const deleteClickHandler = () => {
    const config = {
      headers: {
        Authorization: accessToken,
        "Refresh-Token": refreshToken,
      },
    };
    axios
      .delete(`https://bkyungkeem.shop/api/businessCards/${id}`, config)
      .then(function (response) {
        console.log(response);
        viewArr.filter((x) => x.id !== response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    alert("DELETE SECCESS");
    navigate("/cards");
  };
  const fixClickHandler = () => {
    navigate(`/posts/${view.id}/put`);
  };

  if (view === undefined) return;

  return (
    <div key={id}>
      <div>{view.cardName}</div>
      <div>{view.email}</div>
      <div>{view.company}</div>
      <div>{view.phoneNum}</div>
      <div>{view.companyType}</div>
      <button onClick={deleteClickHandler}>삭제</button>
      <button onClick={fixClickHandler}>수정</button>
    </div>
  );
};

export default ViewMainDetailPost;
