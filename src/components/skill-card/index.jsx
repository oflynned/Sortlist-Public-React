import React from "react"
import "./style.scss"
import { Card } from "../card"

export const SkillCard = ({ skill, location }) => {
  return (
    <Card className={"skill-card"}>
      {skill} agencies in {location}
    </Card>
  )
}