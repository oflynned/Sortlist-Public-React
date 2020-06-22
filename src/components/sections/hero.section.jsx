import React from "react"
import TextLoop from "react-text-loop"
import { Card } from "../card"
import { EditText } from "../edit-text"
import { PrimaryButton } from "../button"

import { Map } from "../lazy-image/map"

import "./hero.section.scss"

const expertiseAreas = [
  "Advertising",
  "Content marketing",
  "Digital marketing",
  "Video production",
  "Design",
  "Web development",
  "Social media",
  "3D",
  "Online advertising",
  "Media",
  "SEO",
  "Gaming",
  "Data consulting",
  "Innovation consulting",
  "Web analytics",
  "Public relations",
  "Copywriting",
  "Mobile app development",
  "Web design"
]

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
              {expertiseAreas.slice(0, 10)
                .map((exp, index) => {
                  if (index < 9) {
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