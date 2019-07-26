import React from "react"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from '../components/services'

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

const Footer = styled.div`
  background: #231f20;
  color: #fff;
  height: 60px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home of local football" />
    <Services/>

    <VideoWrapper>
      <div>
        <iframe width="560" height="315" title="video-pod-1" src="https://www.youtube.com/embed/mK0skJNlulg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>      </div>
      <div>
        <iframe width="560" height="315" title="video-match-1" src="https://www.youtube.com/embed/F27Rh6UUvJc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </VideoWrapper>

    <Footer>

    </Footer>

  </Layout>
)

export default IndexPage
