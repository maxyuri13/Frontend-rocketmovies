import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    display: flex;
    justify-content: center;
    grid-area: content;
    overflow-y: auto;
  }

  .Markers {
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.BLACK_600};
    padding: 1.6rem;
    border-radius: .8rem;
    margin-top: 2.4rem;
  }
`;

export const Form = styled.form`
  width: 111.3rem;
  height: 76.7rem;
  margin: 4rem 11.5rem 9.3rem;

  > a {
    display: flex;
    align-items: center;
    gap: .8rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PINK_100};
    margin-bottom: 2.4rem;
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    margin-bottom: 4rem;
  }
 
  .col {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-top: 4rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    margin-top: 2rem;

    .Delete {
      background-color: ${({ theme }) => theme.COLORS.BLACK_600};
      color: ${({ theme }) => theme.COLORS.PINK_100};
    }
  }
`;