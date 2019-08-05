import styled from "styled-components";
import React from "react"

const VideoWrapper = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 1em;
  text-align: center;

  iframe {
    margin: 0;
    max-width: 100%!important;
  }

  @media only screen and (max-width: 1250px) {
    grid-template-columns: 1fr;
  }
`;


const IndividualVideo = styled.div`
  padding: .5em;
`

const Videos = () => (
  <VideoWrapper>
    <IndividualVideo>
      <iframe
        width="560"
        height="315"
        title="video-pod-1"
        src="https://www.youtube.com/embed/mK0skJNlulg"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </IndividualVideo>
    <IndividualVideo>
      <iframe
        width="560"
        height="315"
        title="video-match-1"
        src="https://www.youtube.com/embed/F27Rh6UUvJc"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </IndividualVideo>

  </VideoWrapper>
);

export default Videos;
