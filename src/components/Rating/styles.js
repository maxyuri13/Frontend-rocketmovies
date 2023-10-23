import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  width: 84px;
  margin-top: 8px;
  margin-bottom: 15px;
  > svg {
    color: ${(props) => props.theme.COLORS.PINK_100};
  }
`