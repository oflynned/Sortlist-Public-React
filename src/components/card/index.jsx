import React from "react"
import "./style.scss"

export const Card = ({ children, className, shadow = false }) => {
  return (
    <div className={`card ${shadow ? "shadow" : ""} ${className}`}>
      <div className={"card-container"}>
        {children}
      </div>
    </div>
  )
}