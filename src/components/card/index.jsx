import React from "react"
import "./style.scss"
import classnames from "classnames"

export const Card = ({ children, className}) => {
  return (
    <div className={classnames("card", className)}>
      <div className={"card-container"}>
        {children}
      </div>
    </div>
  )
}