import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="page home-page">
      <p>PACTravel2025 謎解き</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>アプリケーション</h2>
        <ul>
          <li>
            <Link to="/mikawa">七不思議解明プログラム</Link>
          </li>
          <li>
            <Link to="/ticket">航空券予約</Link>
          </li>          
        </ul>
      </div>
    </div>
  );
}

export default Home;