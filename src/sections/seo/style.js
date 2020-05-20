import styled from 'styled-components';

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

export const AccordionItem = styled.div``;

export const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 30px;
  background-color: red;
`;

export const AccordionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 30px;
`;

export const AccordionContentWrapper = styled.div`
  overflow: hidden;
  height: 0;
`;

export const AccordionContent = styled.div`
  padding: 23px 30px 29px;
  display: none;
  color: ${({ theme }) => theme.palette.neutral.grey};
`;
