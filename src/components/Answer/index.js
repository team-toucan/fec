import React from 'react';
import moment from 'moment';
import { reportAnswer, markAnswerAsHelpful } from '@api';

const Answer = (props) => {
  const {
    answer,
    doUpdateAnswers,
    doUpdateHelpfulness,
    isHidden,
    questionAskerName,
  } = props;

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
      doUpdateAnswers(answer.answer_id);
    } catch (err) {
      console.log('🚀 ~ file: index.js ~ line 10 ~ doReportAnswer ~ err', err);
    }
  };

  return (
    <div className="my-2" style={{ display: isHidden ? 'none' : 'block' }}>
      <h1>
        <span className="font-bold text-xl gary">A:</span> {answer.body}
      </h1>
      <div className="my-2 text-xs ml-7">
        by {answer.answerer_name}{' '}
        <span className="font-bold">
          {questionAskerName === answer.answerer_name ? '- SELLER' : ''}
        </span>
        , {moment(answer.date).format('MMM Do, YYYY')} | Helpful?{' '}
        <span className="underline pointer" onClick={doMarkAnswerAsHelpful}>
          Yes
        </span>{' '}
        ({answer.helpfulness}) |{' '}
        <span className="underline pointer" onClick={doReportAnswer}>
          Report
        </span>
      </div>
      {answer.photos.map((p) => (
        <img scr={p} style={{ maxWidth: '40px' }} />
      ))}
    </div>
  );
};

export default Answer;
