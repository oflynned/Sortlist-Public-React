import React from "react"

import "./style.scss"

const Button = ({ children, onClick, styling = "" }) => {
  return <button className={`btn ${styling}`} onClick={onClick}>{children}</button>
}

export const PrimaryButton = (props) => {
  return <Button {...props} styling={"btn-primary"}/>
}

export const SecondaryButton = (props) => {
  return <Button {...props} styling={"btn-secondary"}/>
}

export const NeutralButton = (props) => {
  return <Button {...props} />
}