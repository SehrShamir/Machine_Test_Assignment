import React from 'react';
import { Link } from 'react-router-dom';

function DashboardPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/add-agent">Add Agent</Link></li>
          <li><Link to="/upload-list">Upload List</Link></li>
          <li><Link to="/view-distribution">View Distributed Lists</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default DashboardPage;
