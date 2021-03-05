import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Seo, Layout } from "../components"

const Home = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage src="../images/gatsby-astronaut.png" alt="A dinosaur" />
  </Layout>
)

export default Home
