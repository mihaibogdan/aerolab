import React, { useState } from 'react';

import { Heading2, Heading6, Paragraph } from 'assets/styles/typography';
import PlusIcon from 'assets/img/icons/plus-icon.svg';
// import MinusIcon from 'assets/img/icons/minus-icon.svg';

import {
  Section,
  Container,
  CenteredTitle,
  AccordionItems,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from './style';

function Seo() {
  const [isInAnimation, setIsInAnimation] = useState(false);

  const show = (accordionItem, accordionContent) => {
    accordionItem.style.height = `${accordionItem.offsetHeight}px`;
    accordionItem.classList.add('active');

    setTimeout(() => {
      accordionContent.classList.add('displayBlock');
      accordionItem.style.height = `${
        accordionItem.offsetHeight + accordionContent.offsetHeight
      }px`;
    }, 0);
    setTimeout(() => {
      accordionItem.style.height = 'auto';
      setIsInAnimation(false);
    }, 300);
  };

  const hide = (accordionItem, accordionContent) => {
    accordionItem.style.height = `${accordionItem.offsetHeight}px`;
    accordionItem.classList.remove('active');

    setTimeout(() => {
      accordionItem.style.height = `${
        accordionItem.offsetHeight - accordionContent.offsetHeight
      }px`;
    }, 0);
    setTimeout(() => {
      accordionContent.classList.remove('displayBlock');
      accordionItem.style.height = 'auto';
      setIsInAnimation(false);
    }, 300);
  };

  const toggle = (e) => {
    if (isInAnimation) return;

    e.persist();
    const accordionItem = e.target.parentNode;
    const accordionContent = accordionItem.querySelector('.contentWrapper');

    setIsInAnimation(true);
    if (!accordionItem.classList.contains('active')) {
      show(accordionItem, accordionContent);
    } else {
      hide(accordionItem, accordionContent);
    }
  };

  return (
    <>
      <Section id="seo">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>SEO</Heading2>
          </CenteredTitle>
          <AccordionItems>
            <AccordionItem>
              <AccordionTitle onClick={toggle}>
                <Heading6 color="inherit">Completely responsive</Heading6>
                <PlusIcon width="20px" />
              </AccordionTitle>
              <AccordionContent className="contentWrapper">
                <Paragraph color="inherit">
                  AeroLand appears professional in design and responsive in performance. It proves
                  to be highly customizable and efficient for landing site building. Engage yourself
                  in the most effortless and well-appointed process with AeroLand.
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTitle onClick={toggle}>
                <Heading6 color="inherit">Completely responsive</Heading6>
                <PlusIcon width="20px" />
              </AccordionTitle>
              <AccordionContent className="contentWrapper">
                <Paragraph color="inherit">
                  AeroLand appears professional in design and responsive in performance. It proves
                  to be highly customizable and efficient for landing site building. Engage yourself
                  in the most effortless and well-appointed process with AeroLand.
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTitle onClick={toggle}>
                <Heading6 color="inherit">Completely responsive</Heading6>
                <PlusIcon width="20px" />
              </AccordionTitle>
              <AccordionContent className="contentWrapper">
                <Paragraph color="inherit">
                  AeroLand appears professional in design and responsive in performance. It proves
                  to be highly customizable and efficient for landing site building. Engage yourself
                  in the most effortless and well-appointed process with AeroLand.
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
          </AccordionItems>
        </Container>
      </Section>
    </>
  );
}

export default Seo;
