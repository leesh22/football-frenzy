import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"


const headerStyles ={
  background: `#0a1f2a`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyItems: "center",
  alignItems: "center",
  padding: "2em",
  textAlign: "center",
  color: "white"
}

const logoStyles = {
  width: "400px"
}

const linkStyle = {
  color: `white`,
  textDecoration: `none`,
}

const Header = ({ siteTitle }) => (
  <header style={headerStyles}>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={linkStyle}>{siteTitle}</Link>
      </h1>
    </div>
    <Image style={logoStyles}/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
