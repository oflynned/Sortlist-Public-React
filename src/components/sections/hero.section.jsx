import React from "react"
import TextLoop from "react-text-loop"
import { Card } from "../card"
import { EditText } from "../edit-text"
import { PrimaryButton } from "../button"

import { Map } from "../lazy-image/map"

import "./hero.section.scss"
import { getRandomSkills } from "../../common/skills"

const skillLimit = 10
const skills = getRandomSkills(skillLimit)

export const Hero = () => {
  return (
    <>
      <div className={"map"}>
        <Map/>
      </div>
      <section className={"fill hero"}>

        <div className={"expertise-titles"}>
          <div className={"title"}>
            <h1>Find your future</h1>
            <div className={"expertise"}>
              <TextLoop interval={2000} children={skills.map(exp => exp.toLowerCase())}/>
            </div>
            <h1>agency now</h1>
            <p>Agencies sorted by us. Rated by clients.</p>
          </div>

          <Card className={"search-card"}>
            <div>
              <span className={"material-icons primary"}>search</span>
              <EditText placeholder={"What services do you need?"}/>
            </div>
            <PrimaryButton>
              <div className={"find-agency"}>
                <span>Find my agency</span>
                <span className={"material-icons"}>arrow_forward</span>
              </div>
            </PrimaryButton>
          </Card>

          <div className={"expertise-links"}>
            <ul>
              {skills.map((exp, index) => {
                if (index < skillLimit - 1) {
                  return <li key={exp}>{exp}<span>|</span></li>
                }

                return <li key={exp}>{exp}</li>
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}