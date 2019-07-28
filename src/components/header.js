import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import {COPY} from "../constants";
import ImageHolder from '../components/imageHolder';

const HeaderWrapper = styled.div`
  background: #0a1f2a;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 3em;
  width: 100%;


  @media only screen and (max-width: 667px) {
    grid-template-columns: 1fr;

    h1, p {
      margin-bottom: 20px;
    }
  }
`

const LogoImage = styled(ImageHolder)`
  width: 50%;

  @media only screen and (max-width: 667px) {
    grid-row-start: 1;
  }
`

const Title = styled.h1`
  margin-bottom: 1em;

  a {
    color: white;
    text-decoration: none;
  }
`

const WrapperStyle = styled.div`
  padding: 3em;

  @media only screen and (max-width: 1025px) {
    padding: 1em;
  }

  @media only screen and (max-width: 1025px) {
    text-align: center;
    margin-top: 50px;
  }
`
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <WrapperStyle>
      <Title><Link to="/">{siteTitle}</Link></Title>
      <p>{COPY.headerDescription}</p>
    </WrapperStyle>
    <LogoImage filename="ff-logo.png"/>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
