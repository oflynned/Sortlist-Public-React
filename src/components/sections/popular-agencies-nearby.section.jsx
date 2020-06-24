import React from "react"
import "./popular-agencies-nearby.section.scss"

import MagnifyingGlass from "../../images/magnifying-glass.svg"

import { getRandomSkillInLocation } from "../../common/skills"

const createList = (n = 30) => new Array(n).fill(0)

export const PopularAgenciesNearby = () => {
  const recentSearches = createList().map(() => getRandomSkillInLocation())

  return (
    <section className={"popular-agencies-nearby"}>
      <div className={"centred"}>
        <div className={"icon-background"}>
          <img src={MagnifyingGlass} alt={"drawing tools"}/>
        </div>
      </div>

      <h1 className={"fancy"}>Most popular agencies near you</h1>
      <p>Never has it been so easy to find the perfect agency for your project.</p>

      <h3 className={"fancy"}>Recent searches</h3>
      <div className={"grid"}>
        <ul>
          {recentSearches.slice(0, 10).map(
            ({ location, skill }) =>
              <li><a href={"/"}>{skill} agencies in {location}</a></li>)}
        </ul>
        <ul>
          {recentSearches.slice(10, 20).map(
            ({ location, skill }) =>
              <li><a href={"/"}>{skill} agencies in {location}</a></li>)}
        </ul>
        <ul>
          {recentSearches.slice(20, 30).map(
            ({ location, skill }) =>
              <li><a href={"/"}>{skill} agencies in {location}</a></li>)}
        </ul>
      </div>

      <a href={"/"}>Explore all countries</a>
    </section>
  )
}