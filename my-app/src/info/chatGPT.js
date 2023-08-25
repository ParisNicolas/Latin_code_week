import React, { useState } from 'react';
import axios from 'axios';
import Form from './formGPT';

const Chatbot = () => {
  const [response, setResponse] = useState('');

  const handleSubmit = async (question) => {
    try {
      const apiKey = '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';
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          prompt: `Duda de eficiencia energética: ${question}`,
          max_tokens: 50, // Ajusta según tus necesidades
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Chatbot de Eficiencia Energética</h1>
      <Form handleSubmit={handleSubmit} />
      {response && (
        <div>
          <strong>Respuesta:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
