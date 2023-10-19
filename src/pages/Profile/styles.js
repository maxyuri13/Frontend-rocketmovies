import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background: ${({ theme }) => theme.COLORS.PINK_200};

    display: flex;
    align-items: center;

    padding: 0 14.4rem;

    a {
      display: flex;
      align-items: center;
      gap: .8rem;
      color: ${({ theme }) => theme.COLORS.PINK_100};
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3.2rem auto 20rem;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 6.4rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BLACK_400};
    }
  }

`;