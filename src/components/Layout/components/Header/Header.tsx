import React from "react"
import { PageProps } from "gatsby"
import { Wrapper, Divider } from "./Header.styles"
import { Menu } from "./components"

interface Header {
  currentPath?: PageProps["location"]["pathname"]
}

const Header = ({ currentPath }: Header) => (
  <Wrapper>
    <Menu
      title="BD Creations"
      isActive={currentPath ? currentPath.startsWith("/business") : false}
      pages={[
        { title: "About", page: "business/about" },
        { title: "Projects", page: "business/projects" },
        { title: "Contact", page: "business/contact" },
      ]}
    />
    <Divider />
    <Menu
      title="Bob Donderwinkel"
      isActive={currentPath ? currentPath.startsWith("/personal") : false}
      pages={[{ title: "Profile", page: "personal/profile" }]}
    />
  </Wrapper>
)

export { Header }
