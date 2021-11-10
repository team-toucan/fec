import React, { useState } from 'react';

import AnswerForm from '@components/AnswerForm';
import Modal from '@components/Modal';
import { markQuestionAsHelpful } from '@api';

const Question = ({ question, doMarkQuestionAsHelpful, isHidden }) => {
  const [isShowing, setIsShowing] = useState(false);
  const doUpdateHelpfulness = async () => {
    try {
      const response = await markQuestionAsHelpful(question.question_id);
      if (response.status === 204) {
        doMarkQuestionAsHelpful(question.question_id);
      }
    } catch (err) {
      console.log(
        '🚀 ~ file: index.js ~ line 10 ~ doUpdateHelpfulness ~ err',
        err
      );
    }
  };
  return (
    <div className="my-2" style={{ display: isHidden ? 'none' : 'flex' }}>
      <h1>
        <span>Q:</span> {question.question_body}
      </h1>
      <div style={{ marginLeft: 'auto' }}>
        Helpful?{' '}
        <span className="pointer underline" onClick={doUpdateHelpfulness}>
          Yes
        </span>{' '}
        ({question.question_helpfulness}) |{' '}
        <span onClick={() => setIsShowing(true)}>Add Answer</span>
      </div>
      <Modal isShowing={isShowing} setIsShowing={setIsShowing}>
        <AnswerForm question_id={question.question_id} />
      </Modal>
    </div>
  );
};

export default Question;
