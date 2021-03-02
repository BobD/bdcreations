import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./components"

interface Layout {
  children: React.ReactNode
}

const Layout = ({ children }: Layout) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      {data.site.siteMetadata?.title || `Title`}
      {children}
    </>
  )
}

export { Layout }
