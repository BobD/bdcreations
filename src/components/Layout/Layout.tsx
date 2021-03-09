import React from "react"
import { Wrapper, Content } from "./Layout.styles"
import { Header, Footer } from "./components"

interface Layout {
  children: React.ReactNode
}

const Layout = ({ children }: Layout) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

export { Layout }
