import React from "react"
import TextLoop from "react-text-loop"
import { Card } from "../card"
import { EditText } from "../edit-text"
import { PrimaryButton } from "../button"

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
].map(exp => exp.toLowerCase())

export const Hero = () => {
  return (
    <section className={"fill hero"}>
      <div className={"expertise-titles"}>
        <div className={"title"}>
          <h1>Find your future</h1>
          <div className={"expertise"}>
            <TextLoop interval={2000} children={expertiseAreas}/>
          </div>
          <h1>agency now</h1>
          <p>Agencies sorted by us. Rated by clients.</p>
        </div>

        <Card className={"search-card"}>
          <div>
            <span className={"material-icons"}>search</span>
            <EditText placeholder={"What service do you need?"}/>
          </div>
          <PrimaryButton>
            <div className={"find-agency"}>
              <span>Find my agency</span>
              <span className={"material-icons"}>arrow_forward</span>
            </div>
          </PrimaryButton>
        </Card>
      </div>
    </section>
  )
}