import React from "react"
import { graphql } from "gatsby"
import { Seo, Layout } from "../components"
import "../css/normalize.css"
import "../css/global.css"
import "../css/fonts.css"
import "../css/colors.css"

const Home = () => (
  <Layout>
    <Seo title="Home" />
  </Layout>
)

export default Home
