import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Question from '@components/Question';
import Answers from '@components/Answers';
import Modal from '@components/Modal';
import QuestionForm from '@components/QuestionForm';

import { StyledDiv } from './styles';

import { getQuestionsByProductId, createQuestion } from '@api';

function Questions() {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isShowing, setIsShowing] = useState(false);

  useEffect(async () => {
    const { data } = await getQuestionsByProductId(id);
    setQuestions(data.results);
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  const doMarkQuestionAsHelpful = (question_id) => {
    const t = questions.map((q) => {
      if (q.question_id === question_id) {
        q.question_helpfulness = q.question_helpfulness + 1;
      }
      return q;
    });
    setQuestions(t);
  };

  const doCreateQuestion = async () => {
    try {
      createQuestion().then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledDiv>
      <input
        className="border-2 border-black"
        type="text"
        onChange={(e) => searchItems(e.target.value)}
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
      {questions.map((q, i) => (
        <div style={{ border: '1px solid red' }}>
          <Question
            question={q}
            doMarkQuestionAsHelpful={doMarkQuestionAsHelpful}
          />
          <Answers question_id={q.question_id} />
        </div>
      ))}
      <Modal isShowing={isShowing} setIsShowing={setIsShowing}>
        <QuestionForm />
      </Modal>
      <button onClick={() => setIsShowing(true)}>Add Question</button>
    </StyledDiv>
  );
}

export default Questions;
