import React from "react"
import "./style.scss"

export const EditText = ({ placeholder = "", styling = "" }) => {
  return <input className={`edit-text ${styling}`} placeholder={placeholder} aria-label={"input"}/>
}

export const SearchBox = (props) => {
  return <EditText styling={"search-box"} {...props}/>
}