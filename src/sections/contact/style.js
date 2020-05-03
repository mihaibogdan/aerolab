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
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
`;

export const Image = styled.img`
  width: 90%;
  height: auto;
  margin-left: 120px;
`;

export const Input = styled.input`
  color: #ababab;
  background-color: #f8f8f8;
  font-size: 15px;
  letter-spacing: 0;
  width: 100%;
  ${(props) => props.width && `width: ${props.width}`};
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 3px 20px;
  height: 56px;
  margin-bottom: 20px;
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}`}
`;

export const TextArea = styled.textarea`
  color: #ababab;
  background-color: #f8f8f8;
  font-size: 15px;
  letter-spacing: 0;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 15px 20px;
  margin-bottom: 20px;
  height: 136px;
  resize: vertical;
`;
