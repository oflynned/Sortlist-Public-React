import React from "react"
import "./style.scss"

export const Divider = ({ halfWidth = false }) =>
  <div className={`divider ${halfWidth ? "half-width" : "full-width"}`}/>