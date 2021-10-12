import React from 'react';
import './BackgroundSection.scss';
import Untitled from './Untitled.mp4';


function BackgroundSection() {
  return (
<video className='background-video' autoPlay loop muted >
    <source src={Untitled} type='video/mp4' />
</video>
  );
}

export default BackgroundSection;
