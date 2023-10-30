import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 16.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
    padding-left: .6rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > a {
    margin: 4.2rem auto 0;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url("${backgroundImg}") no-repeat center center;
  background-size: cover;
`;