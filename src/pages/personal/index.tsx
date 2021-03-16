import React from "react"
import { PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Seo, Layout } from "../../components"

const Personal = ({ location }: PageProps) => (
  <Layout currentPath={location.pathname}>
    <Seo title="Bob Donderwinkel" />
  </Layout>
)

export default Personal
