import React from "react"
import { Wrapper } from "./Footer.styles"

interface Footer {
  siteTitle: string
}

const Footer = ({ siteTitle }: Footer) => {
  return <Wrapper>{siteTitle}</Wrapper>
}

export { Footer }
