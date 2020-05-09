import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Heading5, Paragraph } from 'assets/styles/typography';
import SquareIcon from 'assets/img/product/square.svg';
import { FeatureWrapper, FeatureIcon } from './style';

function Feature({ name, description, theme, ...props }) {
  return (
    <FeatureWrapper {...props}>
      <FeatureIcon>
        <SquareIcon color={theme.palette.neutral.white} width="24" height="24" />
      </FeatureIcon>
      <Heading5 color={theme.palette.primary.dark}>{name}</Heading5>
      <Paragraph color="#696969">{description}</Paragraph>
    </FeatureWrapper>
  );
}

Feature.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  theme: PropTypes.object,
};

export default withTheme(Feature);
