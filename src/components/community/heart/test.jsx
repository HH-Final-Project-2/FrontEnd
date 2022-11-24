import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import './BoardPostDetail.css';
import { __getComment, __postComment } from '../redux/modules/CommentSlice';
import { useParams } from 'react-router-dom';
import {
  __getBoardDetail,
  __getmypost,
  __deleteBoard,
  __boardlike,
} from '../redux/modules/BoardSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import PostComment from './PostComment';
import BoardMypost from './BoardMypost';
import Header from '../component/Header';
import Footer from '../component/Footer';
const BoardPostDetail = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [comment, setcomment] = useState('');
  const [cmtcount, setcmtcount] = useState(0);
  const imagel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [imagelength, setimegelength] = useState(imagel);
  const dispatch = useDispatch();
  const userNickname = sessionStorage.getItem('nickName');
  const [loading, setLoading] = useState(true);
  const ImegaURL = [
    'https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/%EC%BD%9C%EB%A1%9C%EC%84%B8%EC%9B%80.jpg',
    'https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/%EB%93%80%EC%98%A41.jpg',
    'https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/EDO2.jpg',
    'https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/456123.jpg',
  ];
  const DefaultImega = '../img/default1.jpg';
  const DefaultImega2 = '../img/default2.jpg';
  const heartsvg = '/img/heart.svg';
  const binheartsvg = '../img/binheart.svg';
  const post = useSelector((state) => state.BoardSlice.post);
  const isLoading = useSelector((state) => state.BoardSlice.isLoading);
  const mypost = useSelector((state) => state.BoardSlice.myposts);
  const comments = useSelector((state) => state.commentSlice.comments);
  const nickname = localStorage.getItem('nickName');
  console.log('응애 나 애기로딩', isLoading);
  console.log('나 댓글정보', comments);
  console.log(post);
  console.log(mypost);
  const [heart, setHeart] = useState(false);
  const [heartnum, setheartnum] = useState();
  console.log(post?.heartNum);
  console.log(post?.heartYn);
  useEffect(() => {
    dispatch(__getBoardDetail(id));
  }, []);
  useEffect(() => {
    if (!isLoading) dispatch(__getmypost(post?.authorId));
  }, [isLoading]);
  useEffect(() => {
    dispatch(__getComment(id));
  }, []);
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  console.log(Loading);
  useEffect(() => {
    setHeart(post?.heartYn);
    setheartnum(post?.heartNum);
  }, [post]);
  const CheckLength = (e) => {
    let text = e.target.value;
    let Cmtlength = text.length;
    let max_length = 200;
    if (Cmtlength > max_length) {
      alert(max_length + '자 이상 작성할수 없습니다.');
      text = text.substr(0, max_length);
      e.target.value = text;
      e.target.focus();
      setcmtcount(text);
    }
    setcmtcount(Cmtlength);
  };
  const CommentHandler = (e) => {
    setcomment(e.target.value);
  };
  console.log(comment);
  //댓글쓰기
  const WriteComment = () => {
    dispatch(__postComment({ id, content: comment }));
    setcomment('');
  };
  const modifyPost = () => {
    navigate(`/modify/${id.id}`);
  };
  const DeletePost = () => {
    dispatch(__deleteBoard(id));
  };
  //트러블슈팅## 좋아요 갯수 실시간 변환
  //setState에 바로 연산자를 먹이면 예상결괏값으로 출력되지않는다. update 함수를 넣어줘야한다. 어흥
  const Boardpostlike = () => {
    setHeart(!heart);
    dispatch(__boardlike(id.id));
    if (heart) {
      setheartnum((prevstate) => prevstate - 1);
    } else {
      setheartnum((prevstate) => prevstate + 1);
    }
  };
  const goProfile = () => {
    navigate(`/tb/mypage/${post?.authorId}`);
  };
  console.log(heart);
  const ImgHandlerTest = () => { };
  return loading ? (
    <Loading />
  ) : (
    <div>
      <Header />
      <BoardPostDetailContainer>
        <BoardPostDetailWrap>
          <Postnickname>{post?.author} 님의 여행이야기</Postnickname>
          <ImegeWrap>
            <ImegeSlide>
              <Swiper
                effect={'cards'}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  // 페이징 적용, 1 2 3 4 5
                  el: '.pagination', // 페이저 버튼 클래스명
                  clickable: true, // 버튼 클릭 여부
                  type: 'bullets', // 버튼 모양 결정, bullets, fraction
                  // 등등 ...
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation, EffectFade, Pagination, Autoplay]}
                className="mySwiper"
                loop={true}
              >
                {post?.mediaList[0] ? (
                  post?.mediaList.map((item, idx) => {
                    return (
                      <SwiperSlide key={idx}>
                        <SliderImage src={item} />
                      </SwiperSlide>
                    );
                  })
                ) : (
                  <SwiperSlide>
                    <SliderImage src={DefaultImega2} />
                  </SwiperSlide>
                )}
              </Swiper>
            </ImegeSlide>
            <ImegePreview>
              {post &&
                post?.mediaList.map((el, idx) => (
                  <PreviewItem
                    key={idx}
                    src={
                      post?.mediaList[idx] ? post?.mediaList[idx] : DefaultImega
                    }
                    alt=""
                    onClick={ImgHandlerTest}
                  />
                ))}
            </ImegePreview>
          </ImegeWrap>
          <BoardcontentWrap>
            <BoardContentsbox>
              <BoardTitleWrap>
                <BoardTitle>{post?.title}</BoardTitle>
                <TitleButtonWarp>
                  {userNickname == post?.author ? (
                    <>
                      <ModifyButton onClick={modifyPost}>수정</ModifyButton>
                      <DeleteButton onClick={DeletePost}>삭제</DeleteButton>
                    </>
                  ) : (
                    <UserProfile onClick={goProfile}>글쓴이 프로필</UserProfile>
                  )}
                </TitleButtonWarp>
              </BoardTitleWrap>
              <UserNameBox>
                <BoardCateGory>
                  <CateLocal>지역 : {post?.local}</CateLocal>
                  <CateDetail>도시 : {post?.localdetail}</CateDetail>
                </BoardCateGory>
              </UserNameBox>
              <BoardBody>{post?.content}</BoardBody>
            </BoardContentsbox>
            <BoardLike onClick={Boardpostlike}>
              <BoardLikeImage
                src={post && heart ? heartsvg : binheartsvg}
                alt=""
              />
              <BoardLikeCount>{heartnum}</BoardLikeCount>
            </BoardLike>
          </BoardcontentWrap>
          <BoardCommentWrap>
            <BoardCommentBox>
              <CommentWriteUserBox>
                <CommentWriteImg src="../img/cmtdefault.svg" />
                <CommentWriteUser>{post?.nickName}</CommentWriteUser>
              </CommentWriteUserBox>
              <CommentTextarea
                name=""
                maxLength="200"
                id="comment"
                value={comment}
                onKeyUp={CheckLength}
                onChange={CommentHandler}
              />
              <CommentButtonBox>
                <CommentCount>{cmtcount}</CommentCount>
                <CommentCount>/200</CommentCount>
                <CommentWriteButton onClick={WriteComment}>
                  댓글 등록
                </CommentWriteButton>
              </CommentButtonBox>
            </BoardCommentBox>
            {comments &&
              comments?.map((item, idx) => (
                <PostComment
                  key={idx}
                  item={item}
                  idx={idx}
                  id={id}
                  post={post}
                />
              ))}
          </BoardCommentWrap>
          <BoardMypost post={post} mypost={mypost} />
        </BoardPostDetailWrap>
      </BoardPostDetailContainer>
      <Footer />
    </div>
  );
};
export default BoardPostDetail;