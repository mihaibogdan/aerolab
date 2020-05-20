import React from 'react';

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
  const showItem = (e) => {
    e.persist();
    const wrapper = e.target.parentNode.querySelector('.contentWrapper');
    const item = e.target.parentNode;
    if (!wrapper.classList.contains('displayBlock')) {
      item.style.height = `${item.offsetHeight}px`;
      setTimeout(() => {
        wrapper.classList.toggle('displayBlock');
      }, 0);
      setTimeout(() => {
        item.style.height = `${item.offsetHeight + wrapper.offsetHeight}px`;
      }, 0);
      setTimeout(() => {
        item.style.height = 'auto';
      }, 300);
    } else {
      item.style.height = `${item.offsetHeight}px`;

      setTimeout(() => {
        item.style.height = `${item.offsetHeight - wrapper.offsetHeight}px`;
      }, 0);
      setTimeout(() => {
        wrapper.classList.toggle('displayBlock');
        item.style.height = 'auto';
      }, 300);
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
              <AccordionTitle onClick={showItem}>
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
