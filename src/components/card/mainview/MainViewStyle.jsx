import styled from "styled-components";

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
