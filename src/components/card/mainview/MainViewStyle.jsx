import styled from "styled-components";

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

  :focus {
    border: none;
  }
`;

export const CategoryBtn1 = styled.button`
  cursor: pointer;
  background-color: white;
  border: none;
  border-bottom: 3px solid #5546ff;
  font-weight: 600;
  font-size: 16px;
  color: #222222;
`;
export const CategoryBtn2 = styled.button`
  cursor: pointer;
  background-color: white;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const CardList = styled.div`
  padding-top: 32px;
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
  margin-top: 5px;
  margin-left: 5px;
`;

export const CardInCardDetail2 = styled.div`
  font-size: 10px;
  -webkit-transform: scale(0.8);

  margin-top: 17px;
  margin-right: 30px;
`;
export const CardInCardDetail1Name = styled.div`
  font-weight: 500;

  color: #1a1f27;

  font-size: 10px;
  -webkit-transform: scale(0.8);
`;
export const CardInCardDetail1Position = styled.div`
  font-weight: 500;
  font-size: 10px;
  -webkit-transform: scale(0.65);

  color: #8892a0;
`;
export const CardInCardDetail2Email = styled.div`
  color: #1a1f27;
`;
export const CardInCardDetail2Phone = styled.div`
  margin-top: 2px;

  color: #1a1f27;
`;

// ?????? ?????? ??? ???????????? ?????????
export const NoneCardPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .noneCard {
    border-bottom: 1px solid #f5f6fa;
  }

  .nonePageText {
    margin-top: 32px;
    font-weight: 400;
    font-size: 14px;
    color: #8892a0;
  }
`;
