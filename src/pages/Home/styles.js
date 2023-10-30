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
    display: flex;
    justify-content: center;
    grid-area: content;
    overflow-y: auto;
    margin-bottom: 5.5rem;
  }
`;

export const Content = styled.div`
   width: 105.7rem;
   margin: 5rem 12rem;

   .scrollable {
    max-height: 71.7rem;
    overflow-y: auto;
    
   }
   
   .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
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