import styled from "styled-components";

export const StyledComp = styled.a`
  padding: 0.75em 1em;
  background-color: ${({ primary }) => (primary ? "#07c" : "#333")};
  color: white;

  &:hover {
    background-color: #111;
  }
`;
