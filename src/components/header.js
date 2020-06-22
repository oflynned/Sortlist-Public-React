import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header id={"navbar"}>
    <div className={"container"}>
      <div className={"left"}>
        <img src={Logo} alt={"logo"}/>
        <button>For clients</button>
        <button>For agencies</button>
      </div>
      {/*<div className={"centre"}>*/}
      {/*  <input/>*/}
      {/*  <span className={"material-icons"}>search</span>*/}
      {/*</div>*/}
      <div className={"right"}>
        <button>Login</button>
        <button>Signup</button>
        <button className={"agency"}>I'm an agency</button>
        <button className={"client"}>I need an agency</button>
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
