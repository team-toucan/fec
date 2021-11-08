import React from 'react';

import { reportAnswer, markAnswerAsHelpful } from '@api';

const Answer = ({ answer, doUpdateAnswers, doUpdateHelpfulness }) => {
  console.log('🚀 ~ file: index.js ~ line 6 ~ Answer ~ answer', answer);
  const doMarkAnswerAsHelpful = async () => {
    try {
      const response = await markAnswerAsHelpful(answer.answer_id);
      doUpdateHelpfulness(answer.answer_id);
    } catch (err) {
      console.log(
        '🚀 ~ file: index.js ~ line 12 ~ doMarkAnswerAsHelpful ~ err',
        err
      );
    }
  };

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
        by {answer.answerer_name} | Helpful?{' '}
        <span onClick={doMarkAnswerAsHelpful}>Yes({answer.helpfulness})</span> |{' '}
        <span onClick={doReportAnswer}>Report</span>
      </div>
      {answer.photos.map((p) => (
        <img scr={p} style={{ maxWidth: '40px' }} />
      ))}
    </div>
  );
};

export default Answer;
