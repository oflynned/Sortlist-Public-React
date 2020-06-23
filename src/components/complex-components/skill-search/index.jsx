import React from "react"
import { EditText } from "../../edit-text"
import { PrimaryButton } from "../../button"
import { Card } from "../../card"

export const SkillSearch = () => {
  return (
    <Card className={"search-card"} shadow>
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
  )
}