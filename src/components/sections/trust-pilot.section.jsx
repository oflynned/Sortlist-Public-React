import React from "react"

import { PrimaryButton } from "../base/button"
import { Card } from "../base/card"

import Curve from "../../images/curve.svg"
import TechCrunch from "../../images/techcrunch.svg"
import { Lapresse } from "../base/lazy-image/lapresse"

import "./trust-pilot.section.scss"

const Company = () => (
  <div className={"company"}>
    <img src={TechCrunch} alt={"tech crunch"}/>
  </div>
)

const Testimonial = () => {
  return (
    <Card className={"testimonial"} shadow>
      <div className={"testimonial-content"}>
        <h3 className={"fancy"}>John Smith</h3>
        <p className={"fancy"}>Posted on <a href={"/"} className={"fancy"}>trustpilot.com</a></p>
        <Stars/>
        <p>"Sit eaque consequuntur. Alias et dolor totam voluptas inventore assumenda perferendis. Cum enim quidem
          perspiciatis cupiditate. Ducimus ut consequuntur deleniti numquam molestias adipisci voluptatum possimus.
          Nihil est sed. Facilis rerum rerum tenetur et saepe sapiente."</p>
      </div>
    </Card>
  )
}

const Stars = () => (
  <div className={"stars"}>
    <span className={"material-icons"}>star</span>
    <span className={"material-icons"}>star</span>
    <span className={"material-icons"}>star</span>
    <span className={"material-icons"}>star</span>
    <span className={"material-icons"}>star</span>
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
          <Stars/>
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

        <Card className={"main-testimonial"} shadow>
          <div className={"testimonial-container"}>
            <div className={"text-container"}>
              <Stars/>
              <h1 className={"fancy"}>&quot;To summarize, Sortlist in three words I would say: ease, proximity,
                useful.&quot;</h1>
              <div className={"role"}>
                <h3>Tatiana Debrabandere</h3>
                <p>Project Manager at Lapresse</p>
              </div>
              <div className={"read-more"}>
                <a>Read more about Tatiana Debrabandere's experience</a>
                <span className={"material-icons"}>arrow_forward</span>
              </div>
            </div>
            <div className={"image-container"}>
              <Lapresse/>
            </div>
          </div>
        </Card>
      </div>

      <div className={"reviews-container"}>
        <div className={"testimonials"}>
          <div className={"row"}>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
          </div>
          <div className={"row"}>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
          </div>
          <div className={"row"}>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
          </div>
        </div>

        <PrimaryButton>Find my agency</PrimaryButton>
      </div>
    </section>
  )
}