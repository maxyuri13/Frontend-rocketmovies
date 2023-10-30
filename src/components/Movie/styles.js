import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_200};

  border: none;
  border-radius: 1.6rem;

  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  p {
    font-family: 'Roboto', sans-serif;
    white-space: wrap;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  footer {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }

  &:hover {
    filter: brightness(1.3);
    cursor: pointer;
  }
`;