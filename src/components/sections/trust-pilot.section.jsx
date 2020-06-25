import React from "react"
import "./trust-pilot.section.scss"
import Curve from "../../images/curve.svg"
import TechCrunch from "../../images/techcrunch.svg"
import { PrimaryButton } from "../button"

const Company = () => (
  <div className={"company"}>
    <img src={TechCrunch} alt={"tech crunch"}/>
  </div>
)

export const TrustPilot = () => {
  return (
    <section className={"trust-pilot"}>
      <div className={"curve"}>
        <img src={Curve} alt={"curve"}/>
      </div>
      <div className={"container"}>
        <div className={"heading-container"}>
          <div className={"stars"}>
            <span className={"material-icons"}>star</span>
            <span className={"material-icons"}>star</span>
            <span className={"material-icons"}>star</span>
            <span className={"material-icons"}>star</span>
            <span className={"material-icons"}>star</span>
          </div>
          <h3 className={"centred fancy"}>Thousands of companies</h3>
          <h3 className={"centred fancy"}>found their ideal agency via Sortlist</h3>
        </div>
        <div className={"company-container"}>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
        </div>
      </div>

      <div className={"reviews-container"}>
        <PrimaryButton>Find my agency</PrimaryButton>
      </div>
    </section>
  )
}