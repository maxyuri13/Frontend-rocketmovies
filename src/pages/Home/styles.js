import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    width: 105.7rem;
    display: flex;
    grid-area: content;
    margin: 0 auto;
  } 
`;

export const Content = styled.div`
   min-width: 105.7rem;
   margin-bottom: 6rem;

   .header {
    display: flex;
    justify-content: space-between;
    margin: 5.1rem 0 3.8rem;
  }
  
   .scrollable {
    max-height: 71.7rem;
    overflow-y: auto;
   } 

  h1 {
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const AddMovie = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;
  
  height: 4.8rem;
  padding: 2.4rem;
  border-radius: .8rem;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  color: ${({ theme }) => theme.COLORS.BLACK_300};

  font-size: 1.6rem;
  font-weight: 400;

  > svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;