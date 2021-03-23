import React from "react"
import { Wrapper, Content } from "./Page.styles"

interface Page {
  title: string
  content: string
}

const Page = ({ title, content }: Page) => (
  <Wrapper>
    <h1>{title}</h1>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
  </Wrapper>
)

export { Page }
