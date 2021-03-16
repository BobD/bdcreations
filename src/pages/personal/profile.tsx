import React from "react"
import { PageProps } from "gatsby"
import { Seo, Layout } from "../../components"

const Business = ({ location }: PageProps) => (
  <Layout currentPath={location.pathname}>
    <Seo title="Profile" />
  </Layout>
)

export default Business
