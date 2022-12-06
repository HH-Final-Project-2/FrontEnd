import styled from 'styled-components';

export const DetailBox = styled.div`
  width: 375px;
  margin: 0 auto;
`;

export const Section1 = styled.div`
  width: 373px;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e2e6ef;

  .moreBtn {
    margin-bottom: 14px;
  }
`;

export const Section2 = styled.div`
  display: flex;
  align-items: center;

  margin-left: 13px;

  cursor: pointer;
`;

export const DetailPostSection1 = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    margin-top: 16px;
    margin-right: 20px;
  }

  g:hover {
    fill: #5546ff;
    cursor: pointer;
  }

  g rect:hover {
    stroke: #5546ff;
  }

  .nickdate {
    display: flex;
  }
`;

export const NickName = styled.div`
  margin-left: 20px;
  margin-top: 25px;
  font-weight: 600;
  font-size: 14px;

  color: #52596b;
`;

export const Date = styled.div`
  margin-left: 8px;
  margin-top: 27px;
  font-size: 12px;
  color: #8892a0;
`;

export const SectionLine = styled.div`
  height: 1px;
  margin-top: 57px;
  background: #d9d9d9;
`;

export const PostLine = styled.div`
  width: 345px;
  height: 1px;

  margin-left: 12px;
  margin-top: 13px;

  background: #f5f6fa;
`;

export const DetailPostSection2 = styled.div`
  display: flex;
`;

export const JobPosition = styled.div`
  max-height: 25px;
  padding: 5px;
  margin-left: 20px;
  margin-top: 15px;
  font-size: 12px;

  color: #3425de;
  background: #eeecff;
  border-radius: 4px;
`;

export const PostTitle = styled.div`
  max-width: 210px;
  margin-left: 8px;
  margin-right: 20px;
  margin-top: 16px;
  font-weight: 600;
  font-size: 18px;

  word-break: break-all;
  white-space: pre-line;

  color: #1a1f27;
`;

export const DetailPostSection3 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailPostBody = styled.div`
  margin-left: 20px;
  margin-right: 13px;
  margin-top: 25px;

  font-size: 16px;

  white-space: pre-line;
  word-break: break-all;

  color: #1a1f27;
`;

export const DetailPostImg = styled.div`
  margin-left: 19px;
  margin-top: 32px;
  margin-bottom: 40px;

  width: 335px;
  img {
    max-width: 100%;
  }
  border-radius: 8px;
`;

export const DetailPostSection4 = styled.div`
  width: 375px;
  height: 68px;

  display: flex;

  margin-top: 14px;
  margin-left: 20px;
`;

export const CommentBox = styled.div`
  display: flex;
  font-size: 12px;
  color: #52596b;
`;

export const CommentNum = styled.div`
  font-size: 12px;
  color: #52596b;

  margin-left: 7px;
`;

export const HitBox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 42px;
  color: #8892a0;
  font-size: 12px;
`;

export const HitNum = styled.div`
  margin-left: 3px;
  color: #8892a0;
  font-size: 12px;
`;

export const DetailSectionLine = styled.div`
  margin: auto;
  width: 343px;
  height: 1px;
  background: #e2e6ef;
`;

export const DivHeart = styled.div`
  display: flex;
  font-size: 12px;
  margin-right: 15px;
  cursor: pointer;
  color: #52596b;
`;

export const HeartNum = styled.div`
  font-size: 12px;
  color: #52596b;
  margin-left: 7px;
`;

//
export const CommentListLayout = styled.div`
  width: 375px;
  height: 100vh;
`;

export const CommentSection1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentTitle = styled.div`
  display: flex;
`;

export const CommentNickName = styled.div`
  margin-left: 13px;
  margin-top: 13px;
  font-weight: 600;
  font-size: 12px;
`;

export const CommentDate = styled.div`
  margin-left: 5px;
  margin-top: 13px;
  font-size: 12px;
  color: #969696;
`;

export const CommentBody = styled.div`
  width: 355px;
  white-space: pre-line;
  word-break: break-all;
  margin-left: 13px;
  margin-top: 15px;
  font-size: 14px;
`;

export const CommentWriteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -22px;
  margin-bottom: 50px;
`;

export const CommentTextarea = styled.textarea`
  width: 290px;
  height: 44px;
  padding-left: 12px;
  padding-top: 14px;
  resize: none;
  outline: none;
  overflow: hidden;
  border: 1px solid #e2e6ef;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: none;

  :focus {
    border: 1px solid #bbb5ff;
    border-right: none;
  }

  ::placeholder {
    color: #bcc2cc;
  }
`;

export const CommentWirteButton = styled.button`
  height: 44px;
  width: 50px;
  border: none;
  outline: none;
  background: #bbb5ff;
  color: #ffffff;
  font-size: 14px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  :hover {
    background: #5546ff;
  }

  cursor: pointer;
`;

export const LikeButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 13px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const LikeButtonText = styled.label`
  font-size: 15px;
  margin-left: 5px;
`;
