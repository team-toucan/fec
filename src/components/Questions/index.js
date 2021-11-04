import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Question from '../Question';
import Answers from '../Answers';
import Modal from '../Modal';

import { getQuestionsByProductId, createQuestion } from '../../api';

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

  const doCreateQuestion = async () => {
    try {
      createQuestion().then((res) => console.log(res));
      console.log('🚀 ~ file: index.js ~ line 27 ~ doCreateQuestion ~ t', t);
    } catch (err) {
      console.log(
        '🚀 ~ file: index.js ~ line 35 ~ doCreateQuestion ~ err',
        err
      );
      console.log(err);
    }
  };

  return (
    <div>
      <input
        className="border-2 border-black"
        type="text"
        onChange={(e) => searchItems(e.target.value)}
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
      {questions.map((q, i) => (
        <div style={{ border: '1px solid red' }}>
          <Question question={q} />
          <Answers question_id={q.question_id} />
        </div>
      ))}
      <Modal isShowing={isShowing} setIsShowing={setIsShowing}>
        <h1>hello there</h1>
        <h1>hello there</h1>
        <h1>hello there</h1>
        <h1>hello there</h1>
        <h1>hello there</h1>
        <h1>hello there</h1>
        <h1>hello there</h1>
        <h1>hello there</h1>
        <button onClick={() => doCreateQuestion()}>Add</button>
      </Modal>
      <button onClick={() => setIsShowing(true)}>Add Question</button>
    </div>
  );
}

export default Questions;
