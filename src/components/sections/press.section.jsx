import React from "react"

import "./press.section.scss"

import TechCrunch from "../../images/techcrunch.svg"

const Journalist = () => {
  return (
    <div className={"image-container"}>
      <img src={TechCrunch} alt={"tech crunch"}/>
    </div>
  )
}

export const Press = () => {
  return (
    <section className={"full-width"}>
      <div className={"press"}>
          <h3 className={"fancy"}>Press</h3>
        <div className={"journalists"}>
          <Journalist/>
          <Journalist/>
          <Journalist/>
          <Journalist/>
          <Journalist/>
          <Journalist/>
          <Journalist/>
          <Journalist/>
          <Journalist/>
          <Journalist/>
          <Journalist/>
          <Journalist/>
        </div>
      </div>
    </section>
  )
}