import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '../../assets/img/facebook.svg';
import TwitterIcon from '../../assets/img/twitter.svg';
import InstagramIcon from '../../assets/img/instagram.svg';

import { Heading5, Paragraph } from '../../assets/styles/typography';
import { SliderCard, CardAvatar, SocialIcon, SocialIcons } from './style';

function TeamCard({
  cardAvatar,
  cardTitle,
  cardSubtitle,
  facebook,
  twitter,
  instagram,
  small,
  ...props
}) {
  return (
    <SliderCard {...props}>
      <CardAvatar src={cardAvatar} alt="" />
      <Heading5 color="#333">{cardTitle}</Heading5>
      <Paragraph color="#6d70a6">{cardSubtitle}</Paragraph>
      <SocialIcons>
        <SocialIcon href={facebook} aria-label="Facebook">
          <FacebookIcon width="18px" />
        </SocialIcon>
        <SocialIcon href={twitter} aria-label="Twitter">
          <TwitterIcon width="18px" />
        </SocialIcon>
        <SocialIcon href={twitter} aria-label="Instagram">
          <InstagramIcon width="18px" />
        </SocialIcon>
      </SocialIcons>
    </SliderCard>
  );
}

TeamCard.propTypes = {
  cardAvatar: PropTypes.string,
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  small: PropTypes.bool,
};

export default TeamCard;
