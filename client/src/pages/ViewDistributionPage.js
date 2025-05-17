import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewDistributionPage() {
  const [distributionData, setDistributionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDistribution = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No authentication token found. Please log in.');
          setLoading(false);
          return;
        }

       const res = await axios.get('http://localhost:5000/api/lists/by-agent', {
  headers: {
    Authorization: `Bearer ${token}`,  // Make sure there’s exactly one space after 'Bearer'
  },
});


        setDistributionData(res.data);
      } catch (err) {
        console.error('Error fetching distribution:', err);
        if (err.response && err.response.status === 403) {
          setError('Access denied: Invalid or expired token. Please log in again.');
        } else {
          setError('Failed to fetch distribution. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDistribution();
  }, []);

  if (loading) return <p style={{ padding: '20px' }}>Loading...</p>;

  if (error) {
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Distribution by Agent</h2>
      {distributionData.length === 0 ? (
        <p>No distributions found.</p>
      ) : (
        distributionData.map((agent) => (
          <div key={agent.agentId || agent.agentName} style={{ marginBottom: '20px' }}>
            <h3>Agent: {agent.agentName || agent.agentId || 'Unknown Agent'}</h3>
            {Array.isArray(agent.lists) && agent.lists.length > 0 ? (
              <ul>
                {agent.lists.map((listItem, idx) => (
                  <li key={idx}>{listItem}</li>
                ))}
              </ul>
            ) : (
              <p>No assigned lists.</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default ViewDistributionPage;
