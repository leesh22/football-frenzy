import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import {COPY} from "../constants";

import Image from "./image"

const HeaderWrapper = styled.div`
  background: #0a1f2a;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 5em 2em;


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

const Title = styled.h1`
  margin-bottom: 1em;

  a {
    color: white;
    text-decoration: none;
  }
`

const WrapperStyle = styled.div`
  padding: 5em;
`
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <WrapperStyle>
      <Title><Link to="/">{siteTitle}</Link></Title>
      <p>{COPY.headerDescription}</p>
    </WrapperStyle>
    <Image style={logoStyles} src="ff-logo.png"/>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
