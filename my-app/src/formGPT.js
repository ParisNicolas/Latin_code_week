import React, { useState } from 'react';

const Form = ({ handleSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(question);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Escribe tu pregunta sobre eficiencia energética..."
          value={question}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
