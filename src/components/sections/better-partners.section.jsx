import React from "react"
import "./better-partners.section.scss"
import { Card } from "../card"
import { SkillSearch } from "../complex-components/skill-search"
// import IsometricBuildings from "../../images/isometric-buildings.png"
import { IsometricBuildings } from "../lazy-image/isometric-buildings"

export const BetterPartners = () => {
  return (
    <section className={"better-partners"}>

      <Card small>
        <div className={"image-container middle left"}>
          {/*<img src={IsometricBuildings} alt={"isometric buildings"}/>*/}
          <IsometricBuildings/>
        </div>
        <div className={"centred content-container"}>
          <h3 className={"fancy"}>Work in an agency?</h3>
          <p>Join the greatest community of experts</p>
        </div>
        <div className={"image-container middle right"}>
          <IsometricBuildings/>
          {/*<img src={IsometricBuildings} alt={"isometric buildings"}/>*/}
        </div>
      </Card>

      <div className={"block centred"}>
        <div className={"pill"}>
          <p>The Sortlist story</p>
        </div>
        <h1 className={"fancy"}>Better partners make better business</h1>
        <p>Digitalisation has left the business world in a state of unprecedented change, with power that has shifted
          from supply to demand. Buyers, just like yourself, are now in charge. This is exactly what Sortlist’s mission
          is all about: we help you be in control and start your journey by being surrounded by pros you can trust at
          the right time.</p>
      </div>

      <Card large>
        <div className={"content-container"}>
          <h3 className={"fancy"}>Think Sortlist for your next need!</h3>
          <p>Simplify your research process and find the agency made for you.</p>
          <SkillSearch/>
        </div>
        <div className={"image-container right bottom"}>
          <IsometricBuildings/>
          {/*<img src={IsometricBuildings} alt={"isometric buildings"}/>*/}
        </div>
      </Card>
    </section>
  )
}