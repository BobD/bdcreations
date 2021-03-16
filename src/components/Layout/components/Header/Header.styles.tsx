import styled from "styled-components"
import { gap } from "../../Layout.styles"

export const Wrapper = styled.header`
  display: flex;
  gap: 2rem;
  padding: ${gap};
  position: sticky;
  top: 0;

  @media (max-width: 30em) {
    gap: 0;
    padding: 0;
  }
`

export const Divider = styled.div`
  border-right: thin solid var(--textFaded);
  align-self: stretch;
`
