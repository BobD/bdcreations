import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Footer } from "./Footer"

const FooterWrapper = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // {data.site.siteMetadata?.title || `Title`}

  return <Footer siteTitle={data.site.siteMetadata?.title} />
}

export { FooterWrapper as Footer }
