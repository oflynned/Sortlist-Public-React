import React from "react"
import "./style.scss"

export const Card = ({ children, className, shadow = false, small = false }) => {
  return (
    <div className={`card ${shadow ? "shadow" : ""} ${small ? "small" : "large"} ${className}`}>
      <div className={"card-container"}>
        {children}
      </div>
    </div>
  )
}