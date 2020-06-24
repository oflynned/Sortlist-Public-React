import React from "react"
import "./style.scss"

import Logo from "../../images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faLinkedin, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
  return (
    <footer>
      <div className={"split"}>
        <div>
          <img src={Logo} alt={"logo"}/>
        </div>

        <div className={"about-us"}>
          <div className={"who-we-are"}>
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
              <li><a href={"/"}>I need an agency</a></li>
            </ul>

            <ul>
              <li className={"title"}>For agencies</li>
              <li>How it works</li>
              <li>Testimonials</li>
              <li>Pricing</li>
              <li><a href={"/"}>I'm an agency</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={"social-media"}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faTwitter} size={"2x"}/>
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} size={"2x"}/>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} size={"2x"}/>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} size={"2x"}/>
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} size={"2x"}/>
          </li>
        </ul>
      </div>

      <p>{new Date().getFullYear()} &copy; Sortlist | All rights reserved - Terms - Privacy - Help centre - Countries -
        English</p>
    </footer>
  )
}