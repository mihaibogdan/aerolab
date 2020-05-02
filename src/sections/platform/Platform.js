import React from 'react';

import { Heading2, Heading4, Paragraph } from '../../assets/styles/typography';
import { SolidButton } from '../../assets/styles/buttons';

import {
  Section,
  Container,
  CenteredTitle,
  CardGrid,
  DownloadSection,
  DownloadCard,
  MacbookImage,
} from './style';
import Card from '../../components/card';

function Platform() {
  return (
    <>
      <Section id="platform">
        <Container>
          <CenteredTitle>
            <Heading2>Present over 50 platforms</Heading2>
          </CenteredTitle>

          <Paragraph color="#7e7e7e" textAlign="center">
            We are present over a wide range of social media
          </Paragraph>

          <CardGrid>
            <Card
              small
              className="platformCard"
              cardIcon={<img src="src/assets/img/react.svg" alt="" />}
              cardTitle="React Native"
            />
            <Card
              small
              className="platformCard"
              cardIcon={<img src="src/assets/img/microsoft.svg" alt="" />}
              cardTitle="Windows"
            />
            <Card
              small
              className="platformCard"
              cardIcon={<img src="src/assets/img/apple.svg" alt="" />}
              cardTitle="MacOS"
            />

            <Card
              small
              className="platformCard"
              cardIcon={<img src="src/assets/img/java.svg" alt="" />}
              cardTitle="Java"
            />
            <Card
              small
              className="platformCard"
              cardIcon={<img src="src/assets/img/android.svg" alt="" />}
              cardTitle="Android"
            />
            <Card
              small
              className="platformCard"
              cardIcon={<img src="src/assets/img/php.svg" alt="" />}
              cardTitle="PHP"
            />
          </CardGrid>

          <DownloadSection>
            <DownloadCard>
              <Heading4>Free download of our app now</Heading4>
              <Paragraph margin="0px 0px 20px 0px">
                Offer your business with the best assistance for growth.
              </Paragraph>
              <SolidButton>Get AeroLand</SolidButton>
            </DownloadCard>

            <MacbookImage src="src/assets/img/macbook-download.png" />
          </DownloadSection>
        </Container>
      </Section>
    </>
  );
}

export default Platform;
