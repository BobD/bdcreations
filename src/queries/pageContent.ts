import { graphql } from "gatsby"

export const markdownFrontmatterFragment = graphql`
  fragment PageContent on MarkdownRemark {
    frontmatter {
      title
    }
    html
  }
`
