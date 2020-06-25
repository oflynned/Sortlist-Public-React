import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const Lapresse = () => {
  const data = useStaticQuery(
    graphql`
        query {
            placeholderImage: file(relativePath: { eq: "lapresse.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 384) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={"lapresse"}/>
}
