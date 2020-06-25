import React from "react"
import "./style.scss"
import { Card } from "../../base/card"

import "./style.scss"

export const SkillCard = ({ skill, location }) => {
  return (
    <Card className={"skill-card"} shadow>
      {skill}
      <br/>
      {location}
    </Card>
  )
}