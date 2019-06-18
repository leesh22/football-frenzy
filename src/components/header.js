import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";

import Image from "./image"

const HeaderWrapper = styled.div`
  background: #0a1f2a;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 2em;

  h1 {
    margin: 0;
  }

  @media only screen and (max-width: 667px) {
    grid-template-columns: 1fr;

    h1, p {
      margin-bottom: 20px;
    }
  }
`

const logoStyles = {
  width: "55%"
}

const linkStyle = {
  color: `white`,
  textDecoration: `none`,
}

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>
      <h1><Link to="/" style={linkStyle}>{siteTitle}</Link></h1>
      <p>Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. </p>
    </div>
    <Image style={logoStyles}/>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
