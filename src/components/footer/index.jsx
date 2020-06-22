import React from "react"
import "./style.scss"

import Logo from "../../images/logo.svg"

export const Footer = () => {
  return (
    <footer>
      <div className={"split"}>
        <div className={"about-us"}>
          <img src={Logo}/>
          <p>We are an independent partner who knows Marketing &amp; Advertising agencies' competitive landscape. Tell
            us your needs and we'll tell you the agencies you must meet.</p>
        </div>
        <div className={"links"}>
          <ul>
            <li className={"title"}>Sortlist</li>
            <li>About</li>
            <li>Jobs</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <ul>
            <li className={"title"}>For clients</li>
            <li>How it works</li>
            <li>Testimonials</li>
            <li>Explore</li>
            <li><a href={"#"}>I need an agency</a></li>
          </ul>

          <ul>
            <li className={"title"}>For agencies</li>
            <li>How it works</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li><a href={"#"}>I'm an agency</a></li>
          </ul>
        </div>
      </div>

      <p>2020 &copy; Sortlist | All rights reserved - Terms - Privacy - Help centre - Countries - English</p>
    </footer>
  )
}