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
  margin: 18px 0px 0px 20px;
  display: flex;
  gap: 8px;
  height: 30px;
`;

export const SearchSvg = styled.svg`
  display: flex;
  position: relative;
  bottom: -32px;
  left: 320px;
  cursor: pointer;
`;
export const CardSearchInput = styled.input`
  margin: 0px 0px 12px 20px;
  width: 335px;
  height: 40px;

  border: none;
  outline: none;
  background: #f5f5f5;
  border-radius: 8px;
`;

export const CategoryBtn1 = styled.button`
  background-color: white;
  border: none;

  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;
export const CategoryBtn2 = styled.button`
  background-color: white;
  border: none;
  border-bottom: 3px solid #5546ff;

  font-weight: 600;
  font-size: 16px;
  color: #222222;
`;

export const CardList = styled.div`
  padding-top: 32px;
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  border-bottom: 1px solid #e2e6ef;
  margin: auto;
  margin-top: 6px;
  margin-bottom: 12px;
  width: 90%;
  height: 96px;
  cursor: pointer;
`;

export const CardInfo = styled.div`
  margin: 16px 0px 0px 16px;
  height: 96px;
  width: 150px;
`;

export const CardInfoDetail = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const CardName = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #1a1f27;
`;

export const Position = styled.div`
  display: flex;
  align-items: center;

  padding: 3px 8px 3px 8px;
  margin-right: 10px;
  background: #f5f6fa;
  border-radius: 4px;

  font-weight: 400;
  font-size: 12px;

  color: #52596b;
`;

export const Department = styled.div`
  display: flex;
  align-items: center;

  padding: 3px 8px 3px 8px;
  background: #f5f6fa;
  border-radius: 4px;

  font-weight: 400;
  font-size: 12px;

  color: #52596b;
`;

export const CardInCard = styled.div`
  margin: 16px 10px 0px 26px;
  height: 66px;
  width: 130px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
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
  display: flex;
  margin-left: 10px;
  margin-top: 5px;
`;

export const CardInCardDetail2 = styled.div`
  font-size: 10px;
  margin-left: 10px;
  margin-top: 10px;
`;
export const CardInCardDetail1Name = styled.div`
  font-size: 12px;
  font-weight: 500;

  color: #1a1f27;
`;
export const CardInCardDetail1Position = styled.div`
  margin-left: 10px;
  margin-top: 2px;

  font-weight: 500;
  font-size: 10px;
  color: #5546ff;
`;
export const CardInCardDetail2Email = styled.div`
  margin-bottom: 4px;
`;
export const CardInCardDetail2Phone = styled.div``;
