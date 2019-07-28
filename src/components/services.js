import {COPY} from "../constants";
import styled from "styled-components";
import React from "react"
import ImageHolder from "../components/imageHolder";


const ServiceWrapper = styled.div`
  background: #d02935;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 2em 0;
  text-align: center;

  @media only screen and (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`

const ItemWrapper = styled.div`
  padding: 2em 4em;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;


  @media only screen and (max-width: 1350px) {
    padding: 2em 2em;
  }

  @media only screen and (max-width: 990px) {
    width: 70%;
  }

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const ServiceIcon = styled(ImageHolder)`
  width: 50px;
  margin-bottom: 30px;

  img {
    filter: invert(1);
  }
`;

const Services = () => (
  <ServiceWrapper>
    {COPY.services.map((service, i) => (
      <ItemWrapper key={i}>
        <ServiceIcon filename={service.icon}/>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </ItemWrapper>
    ))}
  </ServiceWrapper>
);

export default Services;
