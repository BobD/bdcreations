import React from "react"
import { PageProps } from "gatsby"
import { Wrapper, Title, Pages, Page } from "./Menu.styles"

type Page = {
  title: string
  page: string
}

interface Menu {
  isActive: boolean
  title: string
  pages: [Page, ...Page[]]
}

const Menu = ({ title, pages, isActive }: Menu) => {
  const firstPage = pages[0].page

  return (
    <Wrapper>
      <Title to={`/${firstPage}`}>{title}</Title>
      <Pages active={isActive}>
        {pages.map(({ title, page }) => (
          <Page key={page} to={`/${page}`}>
            {title}
          </Page>
        ))}
      </Pages>
    </Wrapper>
  )
}

export { Menu }
