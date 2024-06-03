import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ReportForm = () => {
  const { hadithId } = useParams();
  const [email, setEmail] = useState('');
  const [problem, setProblem] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/reports', { hadithId, email, problem });
      alert('Meldung eingereicht');
    } catch (error) {
      console.error('Fehler beim Einreichen der Meldung', error);
    }
  };

  return (
    <div>
      <h1>Hadith melden</h1>
      <form onSubmit={handleSubmit}>
        <label>
          E-Mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Problem:
          <textarea value={problem} onChange={(e) => setProblem(e.target.value)} required></textarea>
        </label>
        <button type="submit">Melden</button>
      </form>
    </div>
  );
};

export default ReportForm;
