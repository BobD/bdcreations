import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Seo, Layout } from "../components"
import "../css/normalize.css"
import "../css/global.css"
import "../css/fonts.css"
import "../css/colors.css"

const Home = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage src="../images/gatsby-astronaut.png" alt="A dinosaur" />
  </Layout>
)

export default Home
