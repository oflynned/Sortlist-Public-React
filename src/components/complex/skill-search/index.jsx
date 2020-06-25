import React from "react"
import { EditText } from "../../base/edit-text"
import { PrimaryButton } from "../../base/button"
import { Card } from "../../base/card"

import "./style.scss"

export const SkillSearch = () => {
  return (
    <Card className={"search-card"} shadow>
      <div className={"search-input"}>
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
  )
}