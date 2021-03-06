import styled from 'styled-components';

import { Paragraph } from 'assets/styles/typography';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.neutral.white};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${(props) => props.display && `display: ${props.display}`}
  flex-direction: column;
  align-items: center;

  .transition-group {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 0 15px 0px 15px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0 15px 0px 15px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabContent = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;

  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &.fade-appear,
  &.fade-enter {
    opacity: 0;
  }

  &.fade-appear-active,
  &.fade-appear-done,
  &.fade-enter-active,
  &.fade-enter-done {
    opacity: 1;
  }

  &.fade-exit {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  width: 60%;

  @media screen and (max-width: 1200px) {
    width: 100%;
    text-align: center;
  }
`;

export const RightSection = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }
`;

export const WhatsappButtonIcon = styled.div`
  margin-right: 8px;
  display: flex;
`;

export const TabImage = styled.img`
  max-width: 100%;
`;

export const CenteredContent = styled.div`
  padding-bottom: 20px;
`;

export const FeaturedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0px;
`;

export const FeaturedListItem = styled.li`
  margin-bottom: 10px;
  display: flex;

  svg {
    flex-shrink: 0;
    height: 24px;
  }

  svg,
  ${Paragraph} {
    display: inline-block;
  }

  ${Paragraph} {
    top: -3px;
    position: relative;
  }
`;

export const LearnMoreRow = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
`;

export const SupportCard = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 10px 40px 5px rgba(89, 69, 230, 0.05);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 18px 40px 5px rgba(51, 51, 51, 0.1);
    transform: translateY(-3px);
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`;

export const CardImage = styled.img``;

export const CardContent = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;
