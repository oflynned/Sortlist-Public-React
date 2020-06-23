import React from "react"
import "./style.scss"
import { Card } from "../card"

import "./style.scss"

export const SkillCard = ({ skill, location }) => {
  return (
    <Card className={"skill-card"}>
      {skill} agencies
      <br/>
      {location}
    </Card>
  )
}