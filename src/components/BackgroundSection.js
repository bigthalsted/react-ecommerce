import React from 'react';
import './BackgroundSection.css';

function BackgroundSection() {
  return (
    <div className="background-container">
      <video src="/images/video-2.mp4" autoPlay loop muted />
      <p>featured items</p>
    </div>
  );
}

export default BackgroundSection;
