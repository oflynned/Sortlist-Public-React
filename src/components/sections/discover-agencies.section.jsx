import React from "react"
import "./discover-agencies.section.scss"

import MagnifyingGlass from "../../images/magnifying-glass.svg"
import { PrimaryButton } from "../button"

export const DiscoverAgencies = () => {
  return (
    <section className={"discover-agencies"}>
      <div className={"split-half"}>
        <div className={"placeholder"}/>
      </div>
      <div className={"split-half"}>
        <div className={"content"}>
          <div className={"icon-background"}>
            <img src={MagnifyingGlass}/>
          </div>
          <h1 className={"fancy"}>Discover the best agencies</h1>
          <h1 className={"fancy"}>across the globe</h1>
          <p>There’s nothing worse than not finding what you need. That won’t happen on Sortlist. From big cities to
            small
            towns, we’ve got more than 80,000 agencies across the globe.</p>
          <PrimaryButton>Find my agency</PrimaryButton>
        </div>
      </div>
    </section>
  )
}