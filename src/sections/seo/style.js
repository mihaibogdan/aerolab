import styled from 'styled-components';

export const Section = styled.section`
  background: #f5f7fd;
  background: url(./src/assets/img/contact/seo-bg.png) top right 170px no-repeat,
    linear-gradient(-259deg, #8383ed, #b095f5 65%);
  padding: 120px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
`;

export const CenteredTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Stores = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  a {
    margin-right: 10px;
    display: inline-block;

    &:last-child {
      margin-right: 0;
    }
  }

  img {
    display: block;
    border-radius: 5px;
    max-width: 100%;
    height: auto;
  }
`;
