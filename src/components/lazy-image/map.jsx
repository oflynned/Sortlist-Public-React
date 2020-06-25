import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const Map = () => {
  const data = useStaticQuery(
    graphql`
    query {
      placeholderImage: file(relativePath: { eq: "map.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 740) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={"map"}/>
}
