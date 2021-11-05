import React from 'react';

import { reportAnswer } from '@api';

const Answer = ({ answer, doUpdateAnswers }) => {
  const doReportAnswer = async () => {
    try {
      const response = await reportAnswer(answer.answer_id);
      console.log(
        '🚀 ~ file: index.js ~ line 10 ~ doReportAnswer ~ response',
        response
      );
      doUpdateAnswers(answer.answer_id);
    } catch (err) {
      console.log('🚀 ~ file: index.js ~ line 10 ~ doReportAnswer ~ err', err);
    }
  };
  return (
    <div>
      <h1>A: {answer.body}</h1>
      <div>
        by {answer.answerer_name} | Helpful? Yes({answer.helpfulness}) |{' '}
        <span onClick={doReportAnswer}>Report</span>
      </div>
      {answer.photos.map((p) => (
        <img scr={p} style={{ maxWidth: '40px' }} />
      ))}
    </div>
  );
};

export default Answer;
