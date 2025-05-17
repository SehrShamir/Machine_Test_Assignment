import React, { useState } from 'react';
import axios from 'axios';

function UploadListPage() {
  const [file, setFile] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    const token = localStorage.getItem("token");
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/lists/upload`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("File uploaded and list distributed!");
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".csv,.xlsx,.xls" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Upload List</button>
    </form>
  );
}
export default UploadListPage;

