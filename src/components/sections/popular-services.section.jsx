import React, { useEffect, useState } from "react"

import { SkillCard } from "../skill-card"

import { getRandomSkills } from "../../common/skills"
import { locations } from "../../common/locations"

import "./popular-services.section.scss"
import { Selector } from "../selector"

const skillsPerLocation = locations.map(location => {
  return {
    location,
    skills: getRandomSkills(4)
  }
})

const flattenSkillsToLocation = (skillsPerLocation) => {
  return skillsPerLocation.flatMap(({ location, skills }) => {
    return skills.map(skill => {
      return { location, skill }
    })
  })
}

export const PopularServices = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [filteredSkills, setFilteredSkills] = useState([])

  useEffect(() => {
    const filterSkills = tabIndex => {
      const tagLocation = skillsPerLocation[tabIndex].location
      const skillsForGivenTag = skillsPerLocation.filter(({ location }) => location === tagLocation)
      return flattenSkillsToLocation(skillsForGivenTag)
    }

    const skills = filterSkills(selectedTabIndex)
    setFilteredSkills(skills)
  }, [selectedTabIndex])


  return (
    <section className={"popular-services"}>
      <h1 className={"fancy"}>Most popular services in your area</h1>
      <div className={"locations"}>
        <ul className={"location-tags"}>
          {locations.map((tag, index) => {
            return (
              <li key={tag}
                  className={index === selectedTabIndex ? "selected" : "unselected"}
                  onClick={() => setSelectedTabIndex(index)}>
                {tag}
                {index === selectedTabIndex && <Selector/>}
              </li>
            )
          })}
        </ul>
      </div>
      <div className={"skills-grid"}>
        <ul className={"skills"}>
          {
            filteredSkills.map(({ location, skill }) => {
              return (
                <li key={`${location}-${skill}`}>
                  <SkillCard location={location} skill={skill}/>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}