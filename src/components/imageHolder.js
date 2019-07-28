import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

const ImageHolder = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 300) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }

      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <Img
          className={props.className}
          style={props.style}
          imgStyle={props.imgStyle}
          alt={props.alt}
          sizes={imageSizes}
        />
      );
    }}
  />
)

export default ImageHolder;