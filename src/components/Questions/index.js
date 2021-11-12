import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getQuestionsByProductId } from '@api';

import Question from '@components/Question';
import Answers from '@components/Answers';
import Modal from '@components/Modal';
import QuestionForm from '@components/QuestionForm';
import Button from '@components/Button';
import Searchbar from '../Searchbar';

function Questions() {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [count, setCount] = useState(4);

  useEffect(async () => {
    async function fetchData() {
      const { data } = await getQuestionsByProductId(id, count);
      setQuestions(data.results);
      setFilteredQuestions(data.results);
    }
    fetchData();
  }, [id, count]);

  useEffect(() => {
    if (searchInput.length >= 3) {
      const filteredQuestions = questions.filter((q) => {
        const re = new RegExp(searchInput, 'gi');
        return q.question_body.match(re);
      });
      setFilteredQuestions(filteredQuestions);
    } else {
      setFilteredQuestions(questions);
    }
  }, [searchInput]);

  const doMarkQuestionAsHelpful = (question_id) => {
    const t = questions.map((q) => {
      if (q.question_id === question_id) {
        q.question_helpfulness = q.question_helpfulness + 1;
      }
      return q;
    });
    setQuestions(t);
  };

  return (
    <div>
      <h1 className="my-5">QUESTIONS AND ANSWERS</h1>
      <div className="relative flex w-full flex-wrap items-stretch mb-7">
        <Searchbar setSearchInput={setSearchInput} />
        <span
          style={{
            right: '0px',
            position: 'absolute',
            height: '100%',
            paddingTop: '0.75rem',
            paddingRight: '0.75rem',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>

      {filteredQuestions.map((q, i) => (
        <div key={i}>
          <Question
            question={q}
            doMarkQuestionAsHelpful={doMarkQuestionAsHelpful}
          />
          <Answers question={q} />
        </div>
      ))}
      <Modal isShowing={isShowingModal} setIsShowing={setIsShowingModal}>
        <QuestionForm />
      </Modal>
      <div className="my-4">
        <Button onClick={() => setCount(count + 2)}>
          {'More Answered Questions'}
        </Button>

        <Button className="ml-3" onClick={() => setIsShowingModal(true)}>
          Add a Question +
        </Button>
      </div>
    </div>
  );
}

export default Questions;
