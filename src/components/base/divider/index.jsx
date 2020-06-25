import React from "react"
import "./style.scss"

export const Divider = ({ halfWidth = false, children }) => {
  return (
    <div className={`divider ${halfWidth ? "half-width" : "full-width"}`}>
      {children}
    </div>
  )
}
