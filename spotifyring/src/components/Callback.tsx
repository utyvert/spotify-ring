import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the main page after handling the callback
    navigate('/');
  }, [navigate]);

  return (
    <div className="callback-page">
      <h2>Processing...</h2>
    </div>
  );
};

export default Callback;
