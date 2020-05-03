import styled from 'styled-components';

export const Section = styled.section`
  background-color: #fff;
  padding: 120px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${(props) => props.display && `display: ${props.display}`}
  flex-direction: column;

  .section-description {
    line-height: 2.14;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  position: relative;

  flex-grow: 1;

  &:first-child {
    width: calc(33.333% - 30px);
    margin-right: 45px;
    flex-grow: 0;
  }
`;

export const FeaturesGrid = styled.div`
  display: flex;
  margin-top: 60px;

  .feature {
    margin-bottom: 50px;
    opacity: 0.6;
    cursor: pointer;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);

    &:last-child {
      margin-bottom: 0;
    }

    &:hover,
    &.active {
      opacity: 1;
    }
  }
`;

export const FeatureImage = styled.img`
  border-radius: 20px;
  position: absolute;

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
    opacity: 0;
  }
`;
