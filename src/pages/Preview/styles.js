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
      grid-area: content;
      overflow-y: auto;
      padding: 4rem 12.5rem 15.6rem;
  }

  .titleH1 {
    display: flex;
    align-items: baseline;
    flex-direction: row;
    gap: 1.9rem;

    > h1 {
      font-size: 3.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      margin-top: 2.4rem;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2.4rem 0 4rem;

    > img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      margin-right: .8rem;
    }

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    
    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.PINK_100};
      margin: 0 .8rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 113.7rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > a {
    display: flex;
    align-items: center;
    gap: .8rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  .tags {
    margin-bottom: 4rem;
  }

  p {
    text-align: justify;
  }

  .button {
    display: flex;
    justify-content: center; 
    width: 40rem;
    margin: 5rem auto;
    background-color: ${({ theme }) => theme.COLORS.BLACK_600};
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`;

