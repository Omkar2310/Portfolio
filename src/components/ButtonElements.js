import styled from "styled-components"
export const ButtonHome = styled.button`
  border-radius: 4px;

  background: ${({ primary }) => (primary ? "#FF4040" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: #fff;
  font-family: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: monospace;
  &::hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#0467FB" : "#FF4040")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
