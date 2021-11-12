import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { createAnswer, getProductById } from '@api';

import Button from '@components/Button';
import { StyledForm, StyledFormRow, StyledLabel } from './styles';

const AnswerFrom = ({ question, setIsShowing }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const [productName, setProductName] = useState('');

  useEffect(async () => {
    async function fetchData() {
      const response = await getProductById(id);
      setProductName(response.data.name);
    }
    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      const response = await createAnswer(data, question.question_id);
      setIsShowing(false);
      reset();
    } catch (err) {
      console.log('🚀 ~ file: index.js ~ line 47 ~ onSubmit ~ err', err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-lg">Submit your Answer</div>
        <div className="text-sm italic">
          {productName}:{question.question_body}
        </div>
      </div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormRow>
          <div className="w-full">
            <StyledLabel htmlFor="body">Your Answer </StyledLabel>
            <textarea
              id="body"
              {...register('body', { required: true, maxLength: 1000 })}
              className="w-full h-32 bg-gray-200 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:outline-none focus:bg-white mt-1"
            />
            <p className="text-xs italic mb-5 text-red-500">
              {errors.body?.type === 'required' && 'Question is required'}
            </p>
            <StyledLabel htmlFor="username">Nickname</StyledLabel>
            <input
              id="username"
              {...register('name', { required: true, maxLength: 60 })}
              className="mt-1 block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Example: jack543!"
            />
            <p className="text-xs italic mb-5">
              {errors.name ? (
                <span className="text-red-500">Username is required</span>
              ) : (
                'For privacy reasons, do not use your full name or email address'
              )}
            </p>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <input
              id="email"
              type="email"
              {...register('email', { required: true, maxLength: 60 })}
              className="mt-1 block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
              placeholder="Example: jack@email.com"
            />
            <p className="text-xs italic mb-5">
              {errors.email ? (
                <span className="text-red-500">Email is required</span>
              ) : (
                'For authentication reasons, you will not be emailed'
              )}
            </p>
          </div>
        </StyledFormRow>
        <div className="flex">
          <Button style={{ marginLeft: 'auto', borderRadius: '0.5rem' }}>
            Submit
          </Button>
        </div>
      </StyledForm>
    </>
  );
};

export default AnswerFrom;
