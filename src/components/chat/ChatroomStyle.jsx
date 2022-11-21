import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

//헤더 박스 div
export const St_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
`;
//헤더 타이틀의 의미
export const St_Title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 15px;
`;

export const MyChatBox = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: cadetblue;
`;
export const MyChat = styled.div`
  margin: auto;
  margin-right: 10px;
  border-radius: 8px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  padding: 12px;
  height: 44;
  background-color: #5546ff;
  color: white;
`;

export const UserChatBox = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 100%;
  height: 50px;
`;

// const UserName = styled.span`
//   font-size: 15px;
//   display: flex;
//   margin: auto;
//   margin-left: 10px;
//   align-items: center;
// `;

export const UserChat = styled.div`
  margin: auto;
  border-radius: 8px;
  display: inline-block;
  align-items: center;
  margin-left: 10px;
  font-size: 13px;
  padding: 12px;
  background-color: #f5f6fa;
`;

export const Footer = styled.div`
  width: 100%;
  max-width: 390px;
  height: 60px;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  margin: auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-radius: 12px;
  outline: none;
  resize: none;
  margin: 10px auto;
  align-items: center;
  padding: 8px;
  padding-left: 13px;
  background-color: #c79797;
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
  /* overflow-y: scroll; */
  height: 80vh;
  width: 100%;
  background-color: aqua;
`;

export const MyChatTime = styled.div`
  display: flex;
  width: 100%;
  max-width: 53px;
  height: 20px;
  font-size: 12px;
  background-color: darksalmon;
`;