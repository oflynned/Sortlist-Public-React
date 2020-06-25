import React from "react"
import "./core-values.section.scss"

import DrawingTools from "../../images/drawing-tools.svg"
import { PrimaryButton } from "../base/button"
import { Card } from "../base/card"

import Expertise from "../../images/expertise.png"
import Professionalism from "../../images/professionalism.png"
import TechnicalBrilliance from "../../images/technicity.png"
import Innovation from "../../images/innovation.png"

const CoreCompetencyCard = ({ image, title, content, chosenBy }) => {
  return (
    <Card shadow>
      <div className={"container"}>
        <div className={"content-area"}>
          <div className={"image-container"}>
            <img src={image} alt={"expertise"}/>
          </div>
          <div>
            <h3 className={"fancy"}>{title}</h3>
            <p>{content}</p>
          </div>
          <div className={"target-market"}>
            <h5>Often chosen by:</h5>
            <p>{chosenBy}</p>
          </div>
        </div>
        <div className={"actions"}>
          <div className={"actions-content"}>
            <p>See agencies</p>
            <span className={"material-icons"}>arrow_forward</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

export const CoreValues = () => {
  return (
    <section className={"core-values"}>
      <div className={"centred"}>
        <div className={"icon-background"}>
          <img src={DrawingTools} alt={"drawing tools"}/>
        </div>
      </div>
      <h1 className={"fancy"}>Solutions tailored to your needs</h1>

      <div className={"competency-container"}>
        <CoreCompetencyCard image={Expertise}
                            title={"Specific expertise"}
                            content={"Solve an internal staffing gap with a strong expert"}
                            chosenBy={"Entrepreneurs and SME businesses"}/>
        <CoreCompetencyCard image={Professionalism}
                            title={"Professionalism"}
                            content={"Take your performance to the next level."}
                            chosenBy={"Founders/Brand Managers of SME businesses"}/>
        <CoreCompetencyCard image={TechnicalBrilliance}
                            title={"Technical Brilliance"}
                            content={"Bring technical knowledge to your projects."}
                            chosenBy={"Digital/Brand Manager of 200+ employees"}/>
        <CoreCompetencyCard image={Innovation}
                            title={"Innovation"}
                            content={"Make your ideas to stand out from competition."}
                            chosenBy={"Marketing directors of 200+ employees"}/>
      </div>

      <h3 className={"fancy"}>Looking for something else?</h3>
      <p>Let us guide you to the right agency for your project.</p>
      <div className={"centred"}>
        <PrimaryButton>Find my agency</PrimaryButton>
      </div>
    </section>
  )
}