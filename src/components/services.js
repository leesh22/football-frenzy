import {COPY} from "../constants";
import styled from "styled-components";
import React from "react"

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

const ItemWrapper = styled.div`
  padding: 2em 4em;
`

const Services = () => (
  <ServiceWrapper>
    {COPY.services.map((service, i) => (
      <ItemWrapper key={i}>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </ItemWrapper>
    ))}
  </ServiceWrapper>
);

export default Services;
