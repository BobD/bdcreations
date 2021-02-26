import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../../components/seo"
import Layout from "../../components/layout"

const Business = () => (
  <Layout>
    <SEO title="BD Creations" />
    <StaticImage src="../images/gatsby-astronaut.png" alt="A dinosaur" />
    Business
  </Layout>
)

export default Business
