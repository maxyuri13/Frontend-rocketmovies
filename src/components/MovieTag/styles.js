import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BLACK_200};
  color:  ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.BLACK_200}` : "none"};

  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
      border: none;
      background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  > input {
      height: 5.6rem;
      width: 100%;
    
      padding: 1.6rem;

      color: ${({ theme }) => theme.COLORS.WHITE_100};
      background: transparent;

      border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;