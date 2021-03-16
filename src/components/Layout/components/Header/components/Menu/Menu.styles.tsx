import styled from "styled-components"
import { Link } from "gatsby"
import { gap } from "../../../../Layout.styles"

const transitionSpeed = "0.25s linear"
const activeClassName = "active"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  @media (max-width: 30em) {
    align-items: stretch;
    gap: 0;
    flex: 1;
  }
`

const LinkWrapper = styled(Link).attrs({
  activeClassName,
  partiallyActive: true,
})`
  text-decoration: none;
  color: var(--textFaded);
  transition: color ${transitionSpeed};

  &:hover,
  &.${activeClassName} {
    color: var(--textRegular);
  }
`

export const Title = styled(LinkWrapper)`
  font-weight: var(--textBold);
  text-transform: uppercase;

  @media (max-width: 30em) {
    display: flex;
    align-items: flex-end;
    color: white !important;
    background: black;
    padding: 1rem;
    flex: 1;
  }
`

export const Pages = styled.nav<{ active: boolean }>`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 30em) {
    padding: ${gap};
    display: ${({ active }) => (active ? "flex" : "none")};
  }
`

export const Page = styled(LinkWrapper)`
  line-height: 1.5;
  background-image: linear-gradient(to right, currentColor, currentColor);
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: color ${transitionSpeed}, background-size ${transitionSpeed};

  &:hover,
  &.${activeClassName} {
    background-size: 100% 1px;
  }
`
