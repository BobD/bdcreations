import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Seo, Layout } from "../components"

const Personal = () => (
  <Layout>
    <Seo title="Bob Donderwinkel" />
    <StaticImage src="../images/gatsby-astronaut.png" alt="A dinosaur" />
    Personal
  </Layout>
)

export default Personal
