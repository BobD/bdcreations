import React from "react"
import { Wrapper, Articles, Article } from "./Page.styles"

interface Article {
  title: string
  body: string
}

interface Page {
  title: string
  articles: Article[]
}

const Page = ({ title, articles }: Page) => (
  <Wrapper>
    <h1>{title}</h1>
    <Articles>
      {articles.map(({ title, body }) => (
        <Article>{title}</Article>
      ))}
    </Articles>
  </Wrapper>
)

export { Page }
