import React, { useState } from 'react';

import { Heading2, Heading4, Heading6, Paragraph, Link } from '../../assets/styles/typography';
import { GradientButton } from '../../assets/styles/buttons';
import {
  Section,
  Container,
  CenteredTitle,
  TabContent,
  LeftSection,
  RightSection,
  TabImage,
  CenteredContent,
  FeaturedList,
  FeaturedListItem,
  LearnMoreRow,
  SupportCard,
  CardImage,
  CardContent,
} from './style';

import CheckList from '../../assets/img/check.svg';

function TabSection() {
  return (
    <>
      <Section>
        <Container>
          <CenteredTitle>
            <Heading2>
              We design powerful websites for <br /> landing your success.
            </Heading2>
          </CenteredTitle>

          <TabContent>
            <LeftSection>
              <TabImage src="src/assets/img/featured-image.png" alt="" />
            </LeftSection>
            <RightSection>
              <CenteredContent>
                <Paragraph color="#7e7e7e">
                  Meeting all of your requirements for SEO & branding
                </Paragraph>
                <FeaturedList>
                  <FeaturedListItem>
                    <CheckList width="16px" color="#4fce5d" />
                    <Paragraph color="#7e7e7e" margin="0px 0px 0px 20px">
                      Receive real-time business analytics
                    </Paragraph>
                  </FeaturedListItem>
                  <FeaturedListItem>
                    <CheckList width="16px" color="#4fce5d" />
                    <Paragraph color="#7e7e7e" margin="0px 0px 0px 20px">
                      Cross-browser Compatible Design
                    </Paragraph>
                  </FeaturedListItem>
                  <FeaturedListItem>
                    <CheckList width="16px" color="#4fce5d" />
                    <Paragraph color="#7e7e7e" margin="0px 0px 0px 20px">
                      Completely Gutenberg Ready
                    </Paragraph>
                  </FeaturedListItem>
                  <FeaturedListItem>
                    <CheckList width="16px" color="#4fce5d" />
                    <Paragraph color="#7e7e7e" margin="0px 0px 0px 20px">
                      Highly Responsive Tools
                    </Paragraph>
                  </FeaturedListItem>
                </FeaturedList>
                <GradientButton>Learn mode</GradientButton>
                <LearnMoreRow>
                  <Heading6>What’s next in AeroLand?</Heading6>
                  <Link href="www.google.com" fontSize="18px" margin="0px 0px 0px 5px">
                    Learn more
                  </Link>
                </LearnMoreRow>
              </CenteredContent>
            </RightSection>
          </TabContent>

          <TabContent>
            <LeftSection>
              <TabImage src="src/assets/img/mission-image.png" alt="" />
            </LeftSection>
            <RightSection>
              <CenteredContent>
                <Heading4 color="#2e3280" fontWeight="400">
                  The best ways to create websites
                </Heading4>
                <Paragraph color="#7e7e7e" margin="40px 0px">
                  We bring on like-minded and talented members to help you grow a stronger business
                  for fiercely reaching towards higher goals every day.
                </Paragraph>
                <GradientButton>Learn mode</GradientButton>
                <LearnMoreRow>
                  <Heading6>What’s next in AeroLand?</Heading6>
                  <Link href="www.google.com" fontSize="18px" margin="0px 0px 0px 5px">
                    Learn more
                  </Link>
                </LearnMoreRow>
              </CenteredContent>
            </RightSection>
          </TabContent>

          <TabContent>
            <LeftSection>
              <TabImage src="src/assets/img/support-image.png" alt="" />
            </LeftSection>
            <RightSection>
              <CenteredContent>
                <SupportCard>
                  <CardImage src="src/assets/img/hotline.png" alt="" />
                  <CardContent>
                    <Heading6 color="#ababab" textAlign="left">
                      HOTLINE
                    </Heading6>
                    <a href="tel:">
                      <Heading4 color="#333" margin="10px 0px 20px 0px">
                        0122 8899900
                      </Heading4>
                    </a>
                    <Paragraph color="#7e7e7e">24/7 phone and email support</Paragraph>
                  </CardContent>
                </SupportCard>

                <SupportCard>
                  <CardImage src="src/assets/img/email.png" alt="" />
                  <CardContent>
                    <Heading6 color="#ababab" textAlign="left">
                      GIVE YOUR FEEDBACK
                    </Heading6>
                    <a href="mailto:">
                      <Heading4 color="#333" margin="10px 0px 20px 0px">
                        hello@seopro.com
                      </Heading4>
                    </a>
                    <Paragraph color="#7e7e7e">24/7 phone and email support</Paragraph>
                  </CardContent>
                </SupportCard>
              </CenteredContent>
            </RightSection>
          </TabContent>
        </Container>
      </Section>
    </>
  );
}

export default TabSection;
