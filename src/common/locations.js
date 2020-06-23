export const locations = [
  "Dublin",
  "Cork",
  "Galway",
  "Belfast",
  "Waterford",
  "Kilkenny"
]

export const sortAlphabetically = (a, b) => {
  if (a > b) {
    return 1
  }

  if (b > a) {
    return -1
  }

  return 0
}