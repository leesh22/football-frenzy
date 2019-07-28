import styled from "styled-components";
import React from "react"
import ImageHolder from "../components/imageHolder";

const FooterWrapper = styled.div`
  background: #231f20;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 1em 0;
`

const FooterImage = styled(ImageHolder)`
  width: 50px;
  margin: 0 30px;

  img {
    filter: invert(1);
  }
`;

const Footer = () => (
  <FooterWrapper>
    {/* <a href='#' target='_blank' rel="noopener noreferrer">><FooterImage filename="facebook-icon.png"/></a> */}
    <a href='https://www.instagram.com/footballfrenzypod/' target='_blank' rel="noopener noreferrer"><FooterImage filename="instagram-icon.png"/></a>
    <a href='https://www.youtube.com/channel/UCum0mbnz85-OafUAjIWBynw' target='_blank' rel="noopener noreferrer"><FooterImage filename="youtube-icon.png"/></a>
    <a href='mailto:footballfrezny433@gmail.com' target='_blank' rel="noopener noreferrer"><FooterImage filename="email-icon.png"/></a>
    {/* <a href='#' target='_blank' rel="noopener noreferrer">><FooterImage filename="twitter-icon.png"/></a> */}
  </FooterWrapper>

);

export default Footer;
