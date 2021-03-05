import React from "react"
import { Wrapper } from "./Header.styles"
import { Menu } from "./components"

const Header = () => (
  <Wrapper>
    <Menu
      title="BD Creations"
      page="business"
      subPages={[
        { title: "About", page: "about" },
        { title: "Projects", page: "projects" },
        { title: "Contact", page: "contact" },
      ]}
    />
    <Menu
      title="Bob Donderwinkel"
      page="personal"
      subPages={[{ title: "Profile", page: "profile" }]}
    />
  </Wrapper>
)

export { Header }
