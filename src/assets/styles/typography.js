import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 56px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  color: #fff;
  ${(props) => props.color && `color: ${props.color}`}
`;

export const Heading2 = styled.h2`
  font-size: 48px;
  font-weight: 500;
  line-height: 1.23;
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  color: #2e3280;
  ${(props) => props.color && `color: ${props.color}`};
  text-align: center;
`;

export const Heading4 = styled.h4`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.23;
  margin: 0px 0px 20px 0px;
  color: #fff;
  ${(props) => props.color && `color: ${props.color}`};
`;

export const Heading5 = styled.h5`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.23;
  margin: 24px 0px 12px 0px;
  color: #333;
`;

export const Heading6 = styled.h6`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.23;
  margin: 0;
  color: #6d70a6;
  ${(props) => props.color && `color: ${props.color}`};
  text-align: center;
`;

export const Paragraph = styled.p`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 400;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  color: #fff;
  ${(props) => props.color && `color: ${props.color};`}
  line-height: 1.8;
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  text-align: left;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`}
`;

export const Link = styled.a`
  color: #4fce5d;
  ${(props) => props.color && `color: ${props.color};`}
  font-size: 15px;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  position: relative;

  &::after {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 1px;
    background-color: currentColor;
  }

  &:hover {
    &::after {
      width: 100%;
      right: auto;
      left: 0;
    }
  }
`;
