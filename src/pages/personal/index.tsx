import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../../components/seo"
import Layout from "../../components/layout"

const Personal = () => (
  <Layout>
    <SEO title="Bob Donderwinkel" />
    <StaticImage src="../images/gatsby-astronaut.png" alt="A dinosaur" />
    Personal
  </Layout>
)

export default Personal
