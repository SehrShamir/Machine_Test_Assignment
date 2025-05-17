// App.tsx or App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AddAgentPage from './pages/AddAgentPage';
import UploadListPage from './pages/UploadListPage';
import ViewDistributionPage from './pages/ViewDistributionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/add-agent" element={<AddAgentPage />} />
        <Route path="/upload-list" element={<UploadListPage />} />
        <Route path="/view-distribution" element={<ViewDistributionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
