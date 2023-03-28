import React from 'react';

interface HomePageProps {
  requestAuthorization: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ requestAuthorization }) => {
  return (
    <div className="home-page">
      <header>
        <h1>Spotify Mood Ring</h1>
      </header>
      <main>
        <button onClick={requestAuthorization}>Log in with Spotify</button>
      </main>
    </div>
  );
};

export default HomePage;
