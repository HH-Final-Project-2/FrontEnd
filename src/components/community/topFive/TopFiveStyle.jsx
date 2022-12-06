import styled from 'styled-components';

export const TopFiveContainer = styled.div`
  padding-top: 16px;

  width: 335px;
  height: 188px;

  background: #f5f6fa;
  border-radius: 16px;

  cursor: pointer;
`;

export const TopFiveSection1 = styled.div`
  display: flex;
`;

export const TopFiveSection2 = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const TopFiveSection3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const TopFiveSection4 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  .section4 {
    display: flex;
  }
`;

export const NickName = styled.div`
  font-weight: 600;
  font-size: 12px;

  color: #52596b;
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 12px;

  color: #8892a0;
`;

export const Job = styled.div`
  padding: 3px 8px 3px 8px;

  font-weight: 400;
  font-size: 12px;

  color: #5546ff;
  background: #ffffff;
  border-radius: 4px;
`;

export const Title = styled.div`
  max-width: 180px;
  color: #1a1f27;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Content = styled.div`
  max-width: 190px;
  font-weight: 400;
  font-size: 14px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #52596b;
`;

export const Image = styled.div`
  margin-right: 20px;
  img {
    width: 72px;
    height: 50px;
    border-radius: 8px;

    object-fit: cover;
  }
`;

export const Line = styled.div`
  margin-top: 16px;
  width: 318px;
  height: 1px;

  background: #e2e6ef;
`;

export const Heart = styled.div`
  display: flex;
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;

  color: #52596b;

  .heart {
    display: flex;
    align-items: center;
    margin-left: 7px;
  }
`;

export const Comment = styled.div`
  display: flex;
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;

  color: #52596b;

  .comment {
    display: flex;
    align-items: center;
    margin-left: 7px;
  }
`;

export const Hit = styled.div`
  margin-right: 20px;
  font-size: 12px;
  font-weight: 400;
  color: #8892a0;
`;
