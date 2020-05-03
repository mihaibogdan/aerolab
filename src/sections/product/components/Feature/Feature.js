import React from 'react';
import PropTypes from 'prop-types';

import { Heading5, Paragraph } from '../../../../assets/styles/typography';
import { FeatureWrapper, FeatureIcon } from './style';
import SquareIcon from '../../../../assets/img/square.svg';

function Feature({ name, description, ...props }) {
  return (
    <FeatureWrapper {...props}>
      <FeatureIcon>
        <SquareIcon color="#fff" width="24" height="24" />
      </FeatureIcon>
      <Heading5 color="#2e3280">{name}</Heading5>
      <Paragraph color="#696969">{description}</Paragraph>
    </FeatureWrapper>
  );
}

Feature.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Feature;
