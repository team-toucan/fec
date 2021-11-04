import React, { useEffect, useState } from 'react';

const Question = ({ question }) => {
  return (
    <div style={{ display: 'flex' }}>
      <h1>Q: {question.question_body}</h1>
      <div style={{ marginLeft: 'auto' }}>
        Helpful? Yes ({question.question_helpfulness}) | Add Answer
      </div>
    </div>
  );
};

export default Question;
