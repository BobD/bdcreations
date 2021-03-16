import React from "react"
import { PageProps } from "gatsby"
import { Seo, Layout, Page } from "../../components"

const Business = ({ location }: PageProps) => (
  <Layout currentPath={location.pathname}>
    <Seo title="About" />
    <Page title="About" articles={[]} />
  </Layout>
)

export default Business
