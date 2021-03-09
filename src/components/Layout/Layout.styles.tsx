import styled from "styled-components"

export const gap = "1rem"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: ${gap};

  &:after {
    content: "";
    display: block;
    width: 100px;
    height: 300vh;
    background: rosybrown;
  }
`
