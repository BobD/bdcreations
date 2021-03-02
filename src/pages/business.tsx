import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Seo, Layout } from "../components"

const Business = () => (
  <Layout>
    <Seo title="BD Creations" />
    <StaticImage src="../images/gatsby-astronaut.png" alt="A dinosaur" />
    Business
  </Layout>
)

export default Business
