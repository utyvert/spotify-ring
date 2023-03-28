import React from 'react';

interface PlaylistProps {
  name: string;
  imageUrl: string;
  description: string;
}

const Playlist: React.FC<PlaylistProps> = ({ name, imageUrl, description }) => {
  return (
    <div className="playlist">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Playlist;
