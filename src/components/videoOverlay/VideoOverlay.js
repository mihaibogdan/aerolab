import React from 'react';
import PropTypes from 'prop-types';

import { Overlay, VideoYoutube, CloseButton } from './style';
import CloseIcon from '../../assets/img/close.svg';

function VideoOverlay({ onClose }) {
  return (
    <Overlay>
      <CloseButton onClick={onClose}>
        <CloseIcon width="16px" />
      </CloseButton>
      <VideoYoutube>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/9No-FiEInLA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtubeVideo"
        />
      </VideoYoutube>
    </Overlay>
  );
}

VideoOverlay.propTypes = {
  onClose: PropTypes.bool,
};

export default VideoOverlay;
