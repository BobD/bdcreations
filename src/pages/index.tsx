import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo"
import Layout from "../components/layout"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <StaticImage src="../images/gatsby-astronaut.png" alt="A dinosaur" />
    <Link to="/business">BD Creations</Link>
    <Link to="/personal">Bob Donderwinkel</Link>
  </Layout>
)

export default Home
