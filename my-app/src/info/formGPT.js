import React, { useState } from 'react';

const Form = ({ handleSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(question);
    handleSubmit(question);
  };

  return (
    <div>
      <form onSubmit={submitForm} className='chatbot-bar'>
        <input
          type="text"
          placeholder="Escribe tu pregunta sobre eficiencia energética..."
          value={question}
          onChange={handleChange}
          className='chatbot-input'
        />
        <button type="submit" className='chatbot-button'>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
