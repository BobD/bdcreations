import React from "react"
import { PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Seo, Layout } from "../../components"

const Business = ({ location }: PageProps) => (
  <Layout currentPath={location.pathname}>
    <Seo title="BD Creations" />
  </Layout>
)

export default Business
