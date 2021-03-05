import React from "react"
import { Wrapper, Title, Pages, Link } from "./Menu.styles"

interface Menu {
  title: string
  page: string
  subPages: {
    title: string
    page: string
  }[]
}

const Menu = ({ title, page, subPages }: Menu) => {
  return (
    <Wrapper>
      <Title to={`/${page}`}>{title}</Title>
      <Pages>
        {subPages.map(({ title, page: subPage }) => (
          <Link to={`/${page}/${subPage}`}>{title}</Link>
        ))}
      </Pages>
    </Wrapper>
  )
}

export { Menu }
