import styled from "styled-components";

export const FooterBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 373px;
  height: 80px;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1);
  background: #ffffff;

  z-index: 2;
  svg {
    margin-left: 2.7px;
  }

  g:hover {
    fill: #5546ff;
    cursor: pointer;
  }
`;

export const SectionFooter = styled.div`
  height: 100px;
  background: white;
`;
