import styled from "styled-components"
import { Link } from "gatsby"

const activeClassName = "active"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const LinkWrapper = styled(Link).attrs({ activeClassName })`
  text-decoration: none;
  color: inherit;

  &.${activeClassName} {
    border-bottom: thin solid black;
  }
`

export const Title = styled(LinkWrapper)`
  font-weight: bold;
`

export const Pages = styled.nav`
  display: flex;
  gap: 0.5rem;
`

export { LinkWrapper as Link }
