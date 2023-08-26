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
          model: "text-davinci-003",
          prompt: `Se mi sabio sobre eficiencia energetica. Utiliza un formato html, contesta de manera formal y creativa la siguiente pregunta/pedido: ${question}`,
          max_tokens: 1000 // Ajusta según tus necesidades
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
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
        <div className='responce'>
          <strong>Respuesta:</strong>
          <p><div dangerouslySetInnerHTML={{ __html: response }} /></p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
