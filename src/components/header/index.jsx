import PropTypes from "prop-types"
import React from "react"
import Logo from "../../images/logo.svg"

import "./style.scss"
import { NeutralButton, PrimaryButton, SecondaryButton } from "../button"
import { EditText, SearchBox } from "../edit-text"

const Header = ({ siteTitle }) => (
  <header className={"navbar"}>
    <div className={"container"}>
      <div>
        <img src={Logo} alt={"logo"}/>
        <NeutralButton>For clients</NeutralButton>
        <NeutralButton>For clients</NeutralButton>
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

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
