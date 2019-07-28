import React from "react"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from '../components/services';
import Footer from '../components/footer';
import Videos from '../components/videos';



const IndexPage = () => (
  <Layout>
    <SEO title="Home of local football" />
    <Services/>
    <Videos/>
    <Footer/>
  </Layout>
)

export default IndexPage
