import React from "react"
import { PageProps } from "gatsby"
import { Wrapper, Title, Pages, Page } from "./Menu.styles"

interface Menu {
  isActive: boolean
  title: string
  page: string
  subPages: {
    title: string
    page: string
  }[]
}

const Menu = ({ title, page, subPages, isActive }: Menu) => (
  <Wrapper>
    <Title to={`/${page}`}>{title}</Title>
    <Pages active={isActive}>
      {subPages.map(({ title, page: subPage }) => (
        <Page key={subPage} to={`/${page}/${subPage}`}>
          {title}
        </Page>
      ))}
    </Pages>
  </Wrapper>
)

export { Menu }
