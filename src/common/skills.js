import { locations } from "./locations"

export const skills = [
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
]

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

export const getRandomSkills = (n = 10) => {
  return shuffle(skills.slice(0, n))
}

export const getRandomSkillInLocation = () => {
  return {
    location: shuffle([...locations])[0],
    skill: shuffle([...skills])[0]
  }
}