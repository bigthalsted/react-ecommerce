import React from 'react';
import './BackgroundSection.scss';
import ReactPlayer from 'react-player';

function BackgroundSection() {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      url="https://vimeo.com/607570099"
      autoplay
      background
    />
  );
}

export default BackgroundSection;
