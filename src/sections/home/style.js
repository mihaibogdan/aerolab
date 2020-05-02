import styled from 'styled-components';

export const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(-259deg, #5e60e7, #9c7af2 65%);
  background: url('src/assets/img/startup-bg.jpg');
  background-repeat: none;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 0px 150px;
  display: flex;
  overflow: hidden;
  position: relative;
`;

export const LeftSection = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-self: flex-start;
`;

export const TextBlock = styled.div`
  padding-top: 30px;
  width: 540px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    align-self: flex-start;
  }
`;

export const CTARow = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

export const RightSection = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
`;

export const Image = styled.img`
  width: 100%;
  position: relative;
  bottom: -32px;
`;

export const WaveAnimation = styled.svg`
  width: 200%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
