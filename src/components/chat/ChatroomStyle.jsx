import styled from 'styled-components';

//헤더 박스 div
export const St_Header = styled.div`
  width: 373px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 16px;

  color: #1a1f27;

  border-bottom: 1px solid #e2e6ef;

  .headerTitle {
    display: flex;
    align-items: center;
  }

  .headerSvg {
    display: flex;
    align-items: center;
    margin-right: 16px;
    cursor: pointer;
  }
`;
//헤더 타이틀의 의미
export const St_Title = styled.div`
  font-weight: 500;
  font-size: 16px;

  margin-left: 8px;
`;

export const MyChatBox = styled.div`
  display: flex;
  align-items: end;
  margin: 20px auto;
`;

export const MyChat = styled.div`
  max-width: 280px;
  padding: 8px;
  margin-right: 10px;
  border-radius: 8px;

  font-weight: 400;
  font-size: 14px;

  background-color: #5546ff;
  color: white;

  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
  line-height: 20px;
`;

export const UserChatBox = styled.div`
  display: flex;
  align-items: end;
  margin: 20px auto;
`;

// const UserName = styled.span`
//   font-size: 15px;
//   display: flex;
//   margin: auto;
//   margin-left: 10px;
//   align-items: center;
// `;

export const UserChat = styled.div`
  max-width: 280px;

  padding: 8px;
  margin-left: 16px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  background: #f5f6fa;
  border-radius: 8px;

  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;

  color: #1a1f27;
`;

export const Footer = styled.div`
  display: flex;
  width: 373px;
  height: 80px;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1);
  background: white;

  .dm {
    position: absolute;
    left: 318px;
    bottom: 30px;
  }
`;

export const Input = styled.input`
  display: flex;
  width: 335px;
  height: 40px;
  min-height: 40px;
  border: none;
  border-radius: 40px;
  outline: none;
  resize: none;
  margin: 10px auto;
  align-items: center;
  justify-content: center;

  padding: 10px 30px 10px 16px;
  background: #f5f5f5;
  overflow-y: scroll;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  ::-webkit-scrollbar-thumb {
    height: 8%;
    background: transparent;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 70px;
  margin: 10px;
  border: none;
  background-color: transparent;
  color: #3659b9;
`;

export const ChatRoomBox = styled.div`
  overflow: auto;
  height: 88vh;
  width: 100%;
  max-width: 375px;
`;

export const MyChatTime = styled.div`
  padding-left: 16px;
  margin-left: auto;
  margin-right: 8px;
  font-weight: 400;
  font-size: 12px;
  color: #8892a0;
`;

export const UserChatTime = styled.div`
  margin-right: auto;
  margin-left: 8px;
  font-weight: 400;
  font-size: 12px;

  color: #8892a0;
`;

export const SectionWall = styled.div`
  height: 30px;
  background: white;
`;

export const ChatExit = styled.div`
  width: 375px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;
