import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from './Playlist';

interface PlaylistsProps {
  accessToken: string;
}

interface PlaylistData {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

const Playlists: React.FC<PlaylistsProps> = ({ accessToken }) => {
  const [playlists, setPlaylists] = useState<PlaylistData[]>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const fetchedPlaylists: PlaylistData[] = response.data.items.map((playlist: any) => ({
        id: playlist.id,
        name: playlist.name,
        imageUrl: playlist.images[0].url,
        description: playlist.description,
      }));
    
      setPlaylists(fetchedPlaylists);
    };
    
    if (accessToken) {
      fetchPlaylists();
    }
  }, [accessToken]);

  return (
    <div className="playlists">
    {playlists.map(playlist => (
    <Playlist
        key={playlist.id}
        name={playlist.name}
        imageUrl={playlist.imageUrl}
        description={playlist.description}
      />
    ))}
    </div>
    );
    };
    
    export default Playlists;