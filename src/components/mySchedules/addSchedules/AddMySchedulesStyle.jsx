import styled from 'styled-components';

export const AddSchedulesBox = styled.div``;

export const AddBtn = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  height: 20px;
  font-size: 14px;
  font-weight: 600;

  margin-right: 15px;

  color: #277dff;
  cursor: pointer;
`;

export const TitleTextArea = styled.textarea`
  margin-top: 32px;
  margin-left: 20px;

  padding-top: 14px;
  padding-left: 16px;
  padding-right: 16px;

  width: 335px;
  height: 45px;
  overflow: hidden;
  resize: none;
  outline: none;
  border: 1px solid #e2e6ef;
  border-radius: 8px;

  font-weight: 400;
  font-size: 16px;

  color: #52596b;

  ::placeholder {
    font-weight: 400;
    color: #bcc2cc;
  }

  :focus {
    border: 1px solid #bbb5ff;
  }
`;

export const ContentTextArea = styled.textarea`
  margin-top: 16px;
  margin-left: 20px;

  padding-top: 14px;
  padding-left: 16px;
  padding-right: 16px;

  width: 335px;
  height: 104px;

  overflow: hidden;
  resize: none;

  outline: none;
  border: 1px solid #e2e6ef;
  border-radius: 8px;

  font-weight: 400;
  font-size: 16px;

  color: #52596b;

  ::placeholder {
    color: #bcc2cc;
  }

  :focus {
    border: 1px solid #bbb5ff;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BottomSectionTitle = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 14px;
  color: #52596b;
`;

export const DateStart = styled.div`
  margin-top: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  font-size: 14px;

  .datePicker {
    padding: 9px 9px 9px 13px;
    width: 170px;
    margin-right: 20px;
    border: none;
    outline: none;
    border-radius: 4px;

    color: #52596b;
    background: #f5f6fa;

    font-weight: 400;
    font-size: 14px;
  }

  .startDate {
    margin-left: 20px;

    width: 30px;
    height: 20px;
    color: #bcc2cc;

    font-weight: 500;
    font-size: 14px;
  }
`;

export const DateEnd = styled.div`
  margin-top: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .datePicker {
    margin-right: 20px;

    padding: 9px 9px 9px 13px;
    width: 170px;
    border: none;
    outline: none;
    border-radius: 4px;

    color: #52596b;
    background: #f5f6fa;

    font-weight: 400;
    font-size: 14px;
  }

  .endDate {
    margin-left: 20px;

    width: 30px;
    height: 20px;
    color: #bcc2cc;

    font-weight: 500;
    font-size: 14px;
  }
`;
