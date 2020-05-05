import React from 'react';
import { Element } from 'react-scroll';

import { Heading2, Heading4, Paragraph } from '../../assets/styles/typography';
import { SolidButton } from '../../assets/styles/buttons';
import ReactLogo from '../../assets/img/platform/react.svg';
import MicrosoftLogo from '../../assets/img/platform/microsoft.svg';
import AppleLogo from '../../assets/img/platform/apple.svg';
import JavaLogo from '../../assets/img/platform/java.svg';
import AndroidLogo from '../../assets/img/platform/android.svg';
import PHPLogo from '../../assets/img/platform/php.svg';
import MackbookDownload from '../../assets/img/platform/macbook-download.png';

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
      <Element name="platform">
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
                cardIcon={<ReactLogo />}
                cardTitle="React Native"
              />
              <Card
                small
                className="platformCard"
                cardIcon={<MicrosoftLogo />}
                cardTitle="Windows"
              />
              <Card small className="platformCard" cardIcon={<AppleLogo />} cardTitle="MacOS" />
              <Card small className="platformCard" cardIcon={<JavaLogo />} cardTitle="Java" />
              <Card small className="platformCard" cardIcon={<AndroidLogo />} cardTitle="Android" />
              <Card small className="platformCard" cardIcon={<PHPLogo />} cardTitle="PHP" />
            </CardGrid>

            <DownloadSection>
              <DownloadCard>
                <Heading4>Free download of our app now</Heading4>
                <Paragraph margin="0px 0px 20px 0px">
                  Offer your business with the best assistance for growth.
                </Paragraph>
                <SolidButton>Get AeroLand</SolidButton>
              </DownloadCard>

              <MacbookImage src={MackbookDownload} />
            </DownloadSection>
          </Container>
        </Section>
      </Element>
    </>
  );
}

export default Platform;
