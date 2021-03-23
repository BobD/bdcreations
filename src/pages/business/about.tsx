import React from "react"
import { graphql, useStaticQuery, PageProps } from "gatsby"
import { BusinessQuery } from "../../../graphql-types"
import { getPageContent } from "../../shared"
import { Seo, Layout, Page } from "../../components"

const pageQuery = graphql`
  query Business($slug: String! = "/business/about") {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      ...PageContent
    }
  }
`

const Business = ({ location }: PageProps) => {
  const data: BusinessQuery = useStaticQuery(pageQuery)
  const { title, content } = getPageContent(data)

  return (
    <Layout currentPath={location.pathname}>
      <Seo title={title} />
      <Page title={title} content={content} />
    </Layout>
  )
}

export default Business
