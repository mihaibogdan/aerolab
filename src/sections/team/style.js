import styled from 'styled-components';

export const Section = styled.section`
  background: linear-gradient(-259deg, #5e60e7, #9c7af2 65%);
  margin-top: 80px;
`;

export const Container = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  padding: 120px 0px;

  .swiper-pagination {
    position: static;
    margin-top: 50px;
    height: 60px;
  }

  .swiper-pagination.swiper-pagination-bullets {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet {
    --swiper-pagination-color: #fff;
    margin: 8px;
    display: inline-block;
    background-color: #d8d8d8;
    opacity: 1;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

    &:not(.swiper-pagination-bullet-active):hover {
      width: 12px;
      height: 12px;
      margin: 6px;
      background-color: #fff;
    }
  }

  .swiper-container-horizontal .swiper-pagination-bullets .swiper-pagination-bullet-active {
    width: 16px;
    height: 16px;
    box-shadow: 0 0 9px #ededed;
    opacity: 1;
    background-color: #fff;
    margin: 4px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamCard = styled.div``;
