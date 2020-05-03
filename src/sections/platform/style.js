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
  margin: 60px 100px;

  .platformCard {
    width: 16.666%;
  }
`;

export const DownloadSection = styled.div`
  margin-top: 80px;
  position: relative;
`;

export const DownloadCard = styled.div`
  background: url(src/assets/img/platform/download-section-bg.png) 55% 100%,
    linear-gradient(-138deg, #5e60e7, #9c7af2 50%, #5e60e7);
  background-repeat: no-repeat;
  border-radius: 5px;
  height: 305px;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    align-self: flex-start;
  }
`;

export const MacbookImage = styled.img`
  position: absolute;
  top: -50px;
  right: -70px;
`;
