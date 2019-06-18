import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const serviceStyles = {
  background: "#d02935",
  color: "white",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  justifyItems: "center",
  alignItems: "center",
  padding: "2em",
  textAlign: "center"
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={serviceStyles}>
      <div>
        <h3>service 1</h3>
        <p>Welcome to your new Gatsby site.</p>
      </div>
      <div>
        <h3>service 2</h3>
        <p>Welcome to your new Gatsby site.</p>
      </div>
      <div>
        <h3>service 3</h3>
        <p>Welcome to your new Gatsby site.</p>
      </div>

    </div>

  </Layout>
)

export default IndexPage
