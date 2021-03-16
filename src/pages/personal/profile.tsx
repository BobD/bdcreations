import React from "react"
import { PageProps } from "gatsby"
import { Seo, Layout, Page } from "../../components"

const Business = ({ location }: PageProps) => (
  <Layout currentPath={location.pathname}>
    <Seo title="Profile" />
    <Page title="Profile" articles={[]} />
  </Layout>
)

export default Business
