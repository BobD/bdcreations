import React from "react"
import { Wrapper, Content } from "./Layout.styles"
import { Header, Footer } from "./components"

interface Layout {
  currentPath: Header["currentPath"]
  children: React.ReactNode
}

const Layout = ({ currentPath, children }: Layout) => {
  return (
    <Wrapper>
      <Header currentPath={currentPath} />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

export { Layout }
