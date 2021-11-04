import React, { useEffect, useState } from 'react';

import Answer from '../Answer';

import { getAnswersBuQuestionId } from '../../api';

const Answers = ({ question_id }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    getAnswersBuQuestionId(question_id).then((res) => {
      setAnswers(res.data.results);
    });
  }, []);

  return (
    <div>
      {answers.map((a, i) => (
        <Answer key={i} answer={a} />
      ))}
    </div>
  );
};

export default Answers;
