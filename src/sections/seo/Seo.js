import React from 'react';

import { Heading2, Heading6, Paragraph } from 'assets/styles/typography';
import PlusIcon from 'assets/img/icons/plus-icon.svg';
import MinusIcon from 'assets/img/icons/minus-icon.svg';

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

    if (wrapper.classList.contains('openSection')) {
      setTimeout(() => wrapper.classList.toggle('openSection'), 0);
      wrapper.classList.toggle('displayNone');

      wrapper.style.height = `${wrapper.firstChild.offsetHeight}px`;
      setTimeout(() => {
        wrapper.style.height = 'auto';
        console.log(wrapper.offsetHeight);
      }, 300);
    } else {
      wrapper.style.height = `${wrapper.offsetHeight}px`;
      console.log(wrapper.offsetHeight);

      setTimeout(() => wrapper.classList.toggle('openSection'), 0);
      setTimeout(() => wrapper.classList.toggle('displayNone'), 300);
      console.log(wrapper.offsetHeight);
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
