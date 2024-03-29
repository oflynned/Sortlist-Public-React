import React from "react"
import TextLoop from "react-text-loop"

import { Map } from "../base/lazy-image/map"

import "./hero.section.scss"
import { getRandomSkills } from "../../common/skills"
import { SkillSearch } from "../complex/skill-search"

const skillLimit = 10
const expertiseAreas = getRandomSkills(skillLimit)

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
              <TextLoop interval={2000} children={expertiseAreas.map(exp => exp.toLowerCase())}/>
            </div>
            <h1>agency now</h1>
            <p>Agencies sorted by us. Rated by clients.</p>
          </div>

          <SkillSearch/>

          <div className={"expertise-links"}>
            <ul>
              {expertiseAreas.map((exp, index) => {
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