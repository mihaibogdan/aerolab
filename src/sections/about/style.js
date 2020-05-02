import styled from 'styled-components';

export const Section = styled.section`
  background-color: #fff;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${(props) => props.display && `display: ${props.display}`}
  flex-direction: column;
`;

export const CenteredTitle = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  .aboutCard {
    width: calc(33.333% - 30px);
    margin: 15px;
  }
`;

export const VideoButton = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  margin: 40px 0px;
  .videoButtonText {
    text-transform: uppercase;
    color: #7e7e7e;
    margin-left: 10px;
    letter-spacing: 3px;
    font-weight: 500;
    position: relative;

    &::after {
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      content: '';
      position: absolute;
      bottom: -2px;
      right: 0;
      width: 0;
      height: 1px;
      background-color: #7e7e7e;
    }
  }

  &:hover {
    cursor: pointer;
    .videoButtonText::after {
      width: 100%;
      right: auto;
      left: 0;
    }
  }
`;
