import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  height: 11.6rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BLACK_100};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 12.3rem;

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-right: 6.4rem;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`;

export const Search = styled.div`
  grid-area: search;
  flex: 1;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin: 0 .9rem 0 6.4rem;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      white-space: nowrap;
    }
  } 
`;

export const Logout = styled.button`
  border: none;
  background: none;

  display: flex;
  justify-content: flex-end;
`;