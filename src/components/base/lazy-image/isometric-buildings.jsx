import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const IsometricBuildings = () => {
  const data = useStaticQuery(
    graphql`
        query {
            placeholderImage: file(relativePath: { eq: "isometric-buildings.png" }) {
                childImageSharp {
                    fluid(maxHeight: 256) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={"isometric buildings"}/>
}
