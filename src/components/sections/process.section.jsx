import React from "react"
import "./process.section.scss"

import Cog from "../../images/cog.svg"
import SimpleProcess from "../../images/simple-process.jpg"
import CompleteInfo from "../../images/complete-info.jpg"
import PersonalAssistance from "../../images/personal-assitance.jpg"
import { PrimaryButton } from "../base/button"

export const Process = () => {
  return (
    <section className={"process"}>
      <div className={"centred spacing"}>
        <div className={"icon-background"}>
          <img src={Cog} alt={"cog"}/>
        </div>
      </div>
      <h1 className={"fancy"}>Make the right choice with confidence</h1>
      <p>Discover the most relevant agencies for your project based on your own specific requirements</p>
      <div className={"grid"}>
        <div className={"tile"}>
          <div className={"image-container"}>
            <img src={SimpleProcess} alt={"simple process"}/>
          </div>
          <h3 className={"fancy"}>Simple, quick and agile process</h3>
          <div className={"separator"}/>
          <p>In only a few minutes time, you can access a bespoke selection of agencies that fit your needs and
            criteria.</p>
        </div>
        <div className={"tile"}>
          <div className={"image-container"}>
            <img src={CompleteInfo} alt={"complete information"}/>
          </div>
          <h3 className={"fancy"}>Complete and up-to-date information</h3>
          <div className={"separator"}/>
          <p>Our accurate market data help you make the most informed decision possible concerning the providers that
            suit you the best.</p>
        </div>
        <div className={"tile"}>
          <div className={"image-container"}>
            <img src={PersonalAssistance} alt={"personal assistance"}/>
          </div>
          <h3 className={"fancy"}>Personal assistance</h3>
          <div className={"separator"}/>
          <p>Count on our team of experts throughout the process, available whenever you need.</p>
        </div>
      </div>

      <div className={"action spacing"}>
        <PrimaryButton>Find my agency</PrimaryButton>
      </div>
    </section>
  )
}