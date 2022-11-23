import styled from 'styled-components';

export const FooterBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 56px;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
  svg {
    margin-left: 2.7px;
  }

  g:hover {
    fill: #5546ff;
    cursor: pointer;
  }
`;