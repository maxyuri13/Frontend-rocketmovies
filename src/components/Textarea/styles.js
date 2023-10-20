import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  background-color:  ${({ theme }) => theme.COLORS.BLACK_200};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  border: none;
  resize: none;

  border-radius: 1rem;
  padding: 1.9rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;