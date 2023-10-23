import styled from "styled-components";

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: .8rem 1.6rem;
  border-radius: .8rem;
  margin-right: .8rem;
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  background-color: ${({ theme }) => theme.COLORS.BLACK_400};
`