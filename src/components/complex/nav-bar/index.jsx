import PropTypes from "prop-types"
import React from "react"
import Logo from "../../../images/logo.svg"

import "./style.scss"
import { NeutralButton, PrimaryButton, SecondaryButton } from "../../base/button"
import { SearchBox } from "../../base/edit-text"

const NavBar = ({ siteTitle }) => (
  <header className={"navbar"}>
    <div className={"container"}>
      <div>
        <img src={Logo} alt={"logo"}/>
        <NeutralButton>For clients</NeutralButton>
        <NeutralButton>For agencies</NeutralButton>
      </div>
      <div>
        <SearchBox/>
        <span className={"material-icons"}>search</span>
        <NeutralButton>Login</NeutralButton>
        <NeutralButton>Sign up</NeutralButton>
        <SecondaryButton>I'm an agency</SecondaryButton>
        <PrimaryButton>I need an agency</PrimaryButton>
        <span className={"material-icons"}>language</span>
      </div>
    </div>
  </header>
)

NavBar.propTypes = {
  siteTitle: PropTypes.string
}

NavBar.defaultProps = {
  siteTitle: ``
}

export default NavBar
