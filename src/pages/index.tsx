import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Seo, Layout } from "../components"
import "./normalize.css"
import "./global.css"

const Home = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage src="../images/gatsby-astronaut.png" alt="A dinosaur" />
  </Layout>
)

export default Home
