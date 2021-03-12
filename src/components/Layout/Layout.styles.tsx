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
  flex: 1;
  padding: ${gap};
`
