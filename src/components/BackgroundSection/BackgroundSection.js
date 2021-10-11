import React from 'react';
import './BackgroundSection.scss';
import ReactPlayer from 'react-player';

function BackgroundSection() {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      url=""
      muted
      playing
      loop
      controls={false}
    />
  );
}

export default BackgroundSection;
