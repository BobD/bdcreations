import React from "react"
import { PageProps } from "gatsby"
import { Wrapper, Divider } from "./Header.styles"
import { Menu } from "./components"

interface Header {
  currentPath: PageProps["location"]["pathname"]
}

const Header = ({ currentPath }: Header) => (
  <Wrapper>
    <Menu
      title="BD Creations"
      page="business"
      isActive={currentPath.startsWith("/business")}
      subPages={[
        { title: "About", page: "about" },
        { title: "Projects", page: "projects" },
        { title: "Contact", page: "contact" },
      ]}
    />
    <Divider />
    <Menu
      title="Bob Donderwinkel"
      page="personal"
      isActive={currentPath.startsWith("/personal")}
      subPages={[{ title: "Profile", page: "profile" }]}
    />
  </Wrapper>
)

export { Header }
