import styled from 'styled-components';
import { rgba } from 'polished';

export const Section = styled.section`
  padding: 60px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  padding: 0 15px 0px 15px;

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 0 15px 0px 15px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0 15px 60px 15px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccordionItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
`;

export const AccordionItem = styled.div`
  box-shadow: 0 0 40px 10px rgba(89, 69, 230, 0.05);
  border-radius: 5px;
  overflow: hidden;
  height: 60px;
  transition: height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  .contentWrapper {
    display: none;
  }

  .contentWrapper.displayBlock {
    display: block;
  }
`;

export const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 30px;
  color: ${({ theme }) => rgba(theme.palette.primary.dark, 0.6)};
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: ${({ theme }) => rgba(theme.palette.primary.default, 1)};
    cursor: pointer;
  }

  h6,
  svg {
    pointer-events: none;
  }
`;

export const AccordionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 30px;
`;

export const AccordionContent = styled.div`
  padding: 23px 30px 29px;
  color: ${({ theme }) => theme.palette.neutral.grey};
`;
