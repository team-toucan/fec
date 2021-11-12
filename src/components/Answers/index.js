import React, { useEffect, useState } from 'react';

import Answer from '@components/Answer';

import { getAnswersBuQuestionId } from '@api';

const Answers = ({ question }) => {
  const [answers, setAnswers] = useState([]);
  const [isShowingMoreAnswers, setIsShowingMoreAnswers] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getAnswersBuQuestionId(question.question_id);
      setAnswers(data.results);
    }
    fetchData();
  }, [question]);

  const doUpdateAnswers = (answer_id) => {
    const filteredAnswers = answers.filter((a) => a.answer_id !== answer_id);
    setAnswers(filteredAnswers);
  };

  const doUpdateHelpfulness = (answer_id) => {
    const updatedAnswers = answers.map((a) => {
      if (a.answer_id === answer_id) {
        a.helpfulness = a.helpfulness + 1;
      }
      return a;
    });
    setAnswers(updatedAnswers);
  };

  const doLoadMoreAnswers = () => {
    setIsShowingMoreAnswers(!isShowingMoreAnswers);
  };

  return (
    <div>
      {answers.map((a, i) => (
        <Answer
          key={i}
          answer={a}
          doUpdateAnswers={doUpdateAnswers}
          doUpdateHelpfulness={doUpdateHelpfulness}
          questionAskerName={question.asker_name}
          isHidden={i > 2 && !isShowingMoreAnswers}
        />
      ))}
      {answers.length > 2 && (
        <button className="font-bold" onClick={doLoadMoreAnswers}>
          {!isShowingMoreAnswers ? 'LOAD MORE ANSWERS' : 'Collapse answers'}
        </button>
      )}
    </div>
  );
};

export default Answers;
