import React, { useState, useRef } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} loop autoPlay>
        <source src="/public/music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Button to toggle play/pause */}
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
