import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { createQuestion } from '@api';

const QuestionForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});

  const doHandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const doHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const y = await createQuestion(formData, id);
      console.log('🚀 ~ file: index.js ~ line 21 ~ doHandleSubmit ~ y', y);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={doHandleSubmit}>
      <input
        type="text"
        placeholder="Body"
        name="body"
        onChange={doHandleChange}
      />
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={doHandleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={doHandleChange}
      />
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default QuestionForm;
