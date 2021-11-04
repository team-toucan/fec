import React from 'react';

const Answer = ({ answer }) => {
  return (
    <div>
      <h1>A: {answer.body}</h1>
      <div>
        by {answer.answerer_name} | Helpful? Yes({answer.helpfulness}) | Report
      </div>
    </div>
  );
};

export default Answer;
