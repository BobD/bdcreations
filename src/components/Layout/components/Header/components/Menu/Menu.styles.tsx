import styled from "styled-components"
import { Link } from "gatsby"

const activeClassName = "active"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

const LinkWrapper = styled(Link).attrs({
  activeClassName,
  partiallyActive: true,
})`
  text-decoration: none;
  color: inherit;
  line-height: 1.5;
  background-image: linear-gradient(to right, currentColor, currentColor);
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.25s linear;

  &:hover,
  &.${activeClassName} {
    background-size: 100% 1px;
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
