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

  const doUpdateAnswers = (answer_id) => {
    const filteredAnswers = answers.filter((a) => a.answer_id !== answer_id);
    setAnswers(filteredAnswers);
  };

  return (
    <div>
      {answers.map((a, i) => (
        <Answer key={i} answer={a} doUpdateAnswers={doUpdateAnswers} />
      ))}
    </div>
  );
};

export default Answers;
