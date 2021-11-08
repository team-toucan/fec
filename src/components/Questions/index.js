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

  return (
    <StyledDiv>
      <h1 className="my-5">QUESTIONS AND ANSWERS</h1>
      <div class="relative flex w-full flex-wrap items-stretch mb-3">
        <input
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR THE ANSWERS..."
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
        <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
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
      {/* <div className="mb-3 pt-0">


      </div> */}
      {/*  */}

      {questions.map((q, i) => (
        <div key={i}>
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
      <div className="my-4">
        <button
          className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent "
          onClick={() => setIsShowing(true)}
        >
          More Answered Questions
        </button>
        <button
          className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent ml-5"
          onClick={() => setIsShowing(true)}
        >
          Add a Question +
        </button>
      </div>
    </StyledDiv>
  );
}

export default Questions;
