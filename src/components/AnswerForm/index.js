import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { createAnswer } from '@api';

const AnswerForm = ({ question_id }) => {
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
      const response = await createAnswer(formData, question_id);
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
      <input
        type="text"
        placeholder="Photos"
        name="photos"
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

export default AnswerForm;
