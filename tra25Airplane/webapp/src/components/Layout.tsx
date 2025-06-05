import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;