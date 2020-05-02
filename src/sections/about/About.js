import React, { useState } from 'react';

import { Heading2 } from '../../assets/styles/typography';
import { Section, Container, CenteredTitle, CardGrid, VideoButton } from './style';
import Card from '../../components/card';
import VideoOverlay from '../../components/videoOverlay';

function About() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      {showVideo && (
        <VideoOverlay
          onClose={() => {
            setShowVideo(false);
            document.body.classList.remove('video-open');
          }}
        />
      )}
      <Section id="about">
        <Container>
          <CenteredTitle>
            <Heading2>
              We’ve created enticing designs for <br /> startups and new businesses
            </Heading2>
          </CenteredTitle>

          <VideoButton
            onClick={() => {
              setShowVideo(true);
              document.body.classList.add('video-open');
            }}
          >
            <img src="src/assets/img/play-circle.svg" alt="" />
            <span className="videoButtonText">Intro & Demo Video</span>
          </VideoButton>

          <CardGrid>
            <Card
              className="aboutCard"
              cardIcon={<img src="src/assets/img/box-icon1.png" alt="" />}
              cardTitle="Web Development"
              cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
            />
            <Card
              className="aboutCard"
              cardIcon={<img src="src/assets/img/box-icon2.png" alt="" />}
              cardTitle="Social Media"
              cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
            />
            <Card
              className="aboutCard"
              cardIcon={<img src="src/assets/img/box-icon3.png" alt="" />}
              cardTitle="SEO Marketing"
              cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
            />

            <Card
              className="aboutCard"
              cardIcon={<img src="src/assets/img/box-icon4.png" alt="" />}
              cardTitle="Keywords Search"
              cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
            />
            <Card
              className="aboutCard"
              cardIcon={<img src="src/assets/img/box-icon5.png" alt="" />}
              cardTitle="Email optimization"
              cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
            />
            <Card
              className="aboutCard"
              cardIcon={<img src="src/assets/img/box-icon6.png" alt="" />}
              cardTitle="Web Design"
              cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
            />
          </CardGrid>
        </Container>
      </Section>
    </>
  );
}

export default About;
