import React from "react"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServiceWrapper = styled.div`
  background: #d02935;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 2em;
  text-align: center;
`

const VideoWrapper = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 2em;
  text-align: center;

  iframe {
    margin: 0;
  }
`

const TextWrapper = styled.div`
  background: #231f20;
  color: #fff;
  padding: 2em;
  text-align: center;
`

const Footer = styled.div`
  background: #d02935;
  color: #fff;
  height: 60px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ServiceWrapper>
      <div>
        <h3>service 1</h3>
        <p>Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. </p>
      </div>
      <div>
        <h3>service 2</h3>
        <p>Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. </p>
      </div>
      <div>
        <h3>service 3</h3>
        <p>Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. </p>
      </div>
    </ServiceWrapper>

    <VideoWrapper>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/mK0skJNlulg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/HxoUgE0gOk0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </VideoWrapper>

    <TextWrapper>
      <h3> About Us</h3>
      <p>Cupcake ipsum dolor sit amet lemon drops. Jelly beans fruitcake tiramisu. Oat cake marzipan wafer pie chocolate marshmallow gingerbread.</p>
      <p>Pastry soufflé cake apple pie jujubes ice cream. Bear claw muffin cotton candy donut fruitcake jujubes brownie. Halvah donut cookie tootsie roll lollipop. Cupcake sweet roll carrot cake marshmallow pie bonbon.</p>
      <p>Cake cake pastry pastry tootsie roll wafer icing tart. Marshmallow candy chocolate soufflé. Soufflé cake lemon drops macaroon apple pie sweet roll.</p>
    </TextWrapper>

    <Footer>
      <p>social media + emails</p>
    </Footer>

  </Layout>
)

export default IndexPage
