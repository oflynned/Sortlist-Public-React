import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
