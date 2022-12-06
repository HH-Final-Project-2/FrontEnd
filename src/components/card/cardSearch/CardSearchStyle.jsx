import styled from 'styled-components';

export const ComInfor = styled.div`
  cursor: pointer;
`;

export const Company = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #222222;
  padding-left: 14px;
`;

export const Address = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #8892a0;
  padding-left: 14px;
  width: 300px;
  margin-bottom: 10px;
`;

export const St_Header = styled.div`
  font-weight: 600;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 12px;
  color: #1a1f27;
  margin-bottom: 20px;
`;

export const St_Title = styled.div`
  font-weight: 600;
  width: 100%;
  max-width: 85px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 4px;
`;

export const SearchBox = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #d6d6d6;
  position: relative;
  bottom: 5px;
`;

export const Icon = styled.div`
  height: 15px;
  width: 25px;
  display: flex;
  position: relative;
  bottom: 48px;
  left: 30px;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  max-width: 335px;
  height: 40px;
  border: 0px solid;
  border-radius: 8px;
  outline: none;
  background: #f5f5f5;
  margin: auto;
  padding-left: 40px;

  :focus {
    border: none;
  }
`;

export const Button = styled.a`
  width: 35px;
  height: 0px;
  display: flex;
  position: relative;
  bottom: 61px;
  left: 310px;
  cursor: pointer;
  font-size: 14px;
`;

export const CategoryBtnBox = styled.div`
  margin: 14px 275px 0px 20px;
  padding: 14px 0px 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 150px;
  height: 30px;
  left: 20px;
  top: 14px;
`;

export const SearchSvg = styled.svg`
  display: flex;
  position: relative;
  bottom: -43px;
  left: 320px;
  cursor: pointer;
`;
export const CardSearchInput = styled.input`
  margin: 12px 20px 12px 20px;
  width: 100%;
  max-width: 335px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #f1f1f1;
`;

export const CategoryBtn1 = styled.button`
  font-size: 16px;
  background-color: white;
  border: none;
  border-bottom: 3px solid #5546ff;
`;
export const CategoryBtn2 = styled.button`
  font-size: 16px;
  background-color: white;
  border: none;
`;

export const CardList = styled.div`
  background-color: #f5f5f5;
  padding-top: 32px;
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  background-color: white;
  margin: 12px 20px 0px 20px;
  border-radius: 10px;
  width: 335px;
  height: 96px;
`;

export const CardInfo = styled.div`
  margin: 16px 0px 0px 16px;
  height: 96px;
  width: 150px;
`;

export const CardInfoDetail = styled.div`
  margin: 26px 0px 0px 0px;
  display: flex;
  justify-content: left;
`;

export const CardName = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

export const Position = styled.div`
  font-size: 8px;
  font-weight: 400;
  padding: 6px 16px 6px 16px;
  margin-right: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

export const Department = styled.div`
  font-size: 8px;
  font-weight: 400;
  padding: 6px 16px 6px 16px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

export const CardInCard = styled.div`
  margin: 20px 10px 0px 30px;
  height: 60px;
  width: 120px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
`;

export const WriteButton = styled.div`
  position: fixed;
  bottom: 100px;
  margin-left: 300px;

  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
  }
  &:active {
    margin-bottom: 15px;
  }
  transition-duration: 0.3s;
`;

export const CardInCardDetail1 = styled.div`
  font-size: 8px;
  display: flex;
  justify-content: left;
  margin-left: 10px;
  margin-top: 5px;
`;

export const CardInCardDetail2 = styled.div`
  font-size: 8px;
  margin-left: 10px;
  margin-top: 13px;
`;
export const CardInCardDetail1Name = styled.div`
  font-size: 12px;
`;
export const CardInCardDetail1Position = styled.div`
  margin-left: 10px;
  font-weight: 300;
  margin-top: 2px;
`;
export const CardInCardDetail2Email = styled.div`
  margin-bottom: 2px;
`;
export const CardInCardDetail2Phone = styled.div``;
