import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
  TabList,
  Tab,
} from './style';
import CheckList from '../../assets/img/tab-section/check.svg';
import FeaturedImage from '../../assets/img/tab-section/featured-image.png';
import MissionImage from '../../assets/img/tab-section/mission-image.png';
import SupportImage from '../../assets/img/tab-section/support-image.png';
import HotlineImage from '../../assets/img/tab-section/hotline.png';
import EmailImage from '../../assets/img/tab-section/email.png';

const tabs = [
  {
    name: 'Featured',
    content: (
      <TabContent className="active-tab">
        <LeftSection>
          <TabImage src={FeaturedImage} alt="" />
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
    ),
  },
  {
    name: 'Mission',
    content: (
      <TabContent>
        <LeftSection>
          <TabImage src={MissionImage} alt="" />
        </LeftSection>
        <RightSection>
          <CenteredContent>
            <Heading4 color="#2e3280" fontWeight="400">
              The best ways to create websites
            </Heading4>
            <Paragraph color="#7e7e7e" margin="40px 0px">
              We bring on like-minded and talented members to help you grow a stronger business for
              fiercely reaching towards higher goals every day.
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
    ),
  },
  {
    name: 'New Friendly Support',
    content: (
      <TabContent>
        <LeftSection>
          <TabImage src={SupportImage} alt="" />
        </LeftSection>
        <RightSection>
          <CenteredContent>
            <SupportCard>
              <CardImage src={HotlineImage} alt="" />
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
              <CardImage src={EmailImage} alt="" />
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
    ),
  },
];

function TabSection() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Section>
        <Container>
          <CenteredTitle>
            <Heading2>
              We design powerful websites for <br /> landing your success.
            </Heading2>
          </CenteredTitle>

          <TabList>
            {tabs.map((tab, index) => (
              <Tab
                key={tab.name}
                className={index === activeTab ? 'active' : ''}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>
          <TransitionGroup className="transition-group">
            {tabs.map((tab, index) =>
              index === activeTab ? (
                <CSSTransition
                  in={index === activeTab}
                  key={tab.name}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                  appear
                >
                  {tabs[activeTab].content}
                </CSSTransition>
              ) : null
            )}
          </TransitionGroup>
        </Container>
      </Section>
    </>
  );
}

export default TabSection;
