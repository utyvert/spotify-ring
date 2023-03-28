import './App.css'
import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import Callback from './components/Callback';
import Playlists from './components/Playlists';



function App() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const requestAuthorization = () => {
    const clientId = 'f8d18413678c438b88f1ece77a2f2de3';
    const redirectUri = 'http://localhost:3000/callback'; // e.g. http://localhost:3000/callback
    const scope = encodeURIComponent('user-read-private user-read-email playlist-read-private');
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scope}`;

    window.location.href = authUrl;
  };

  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial: any, item) => {
        if (item) {
          const parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});

    if (hash.access_token) {
      setAccessToken(hash.access_token);
    }
  }, []);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={
            accessToken ? (
              <Playlists accessToken={accessToken} />
            ) : (
              <HomePage requestAuthorization={requestAuthorization} />
            )
          }>
          </Route>
          <Route path="/callback" element={<Callback />}>
          </Route>
          {/* Add other routes here as needed */}
        </Routes>
      </div>
  );
  
}

export default App
