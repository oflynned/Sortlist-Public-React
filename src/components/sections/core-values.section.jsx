import React from "react"
import "./core-values.section.scss"

import DrawingTools from "../../images/drawing-tools.svg"
import { PrimaryButton } from "../button"

export const CoreValues = () => {
  return (
    <section className={"core-values"}>
      <div className={"centred"}>
        <div className={"icon-background"}>
          <img src={DrawingTools} alt={"drawing tools"}/>
        </div>
      </div>
      <h1 className={"fancy"}>Solutions tailored to your needs</h1>

      <h3 className={"fancy"}>Looking for something else?</h3>
      <p>Let us guide you to the right agency for your project.</p>
      <div className={"centred"}>
        <PrimaryButton>Find my agency</PrimaryButton>
      </div>
    </section>
  )
}