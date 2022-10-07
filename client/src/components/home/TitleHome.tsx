import React from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import './Home.css';

export const TitleHome = () => {
  return (
    <div className="container-title">
      <p>HotDeal</p>
      <p>
        <BoltIcon />
      </p>
    </div>
  );
};
