
import React, { useState } from 'react';
import './AI.css';

const AI = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = (e) => {
    e.preventDefault();
    // Lógica para interactuar con la IA
  };

  return (
    <div className="ai">
      <h1>Inteligencia Artificial</h1>
      <form onSubmit={handleQuery}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Haz una pregunta o pide algo"
          required
        />
        <button type="submit">Enviar</button>
      </form>
      <div className="response">
        {response}
      </div>
    </div>
  );
};

export default AI;
