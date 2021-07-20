import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={s.btn}
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option.charAt(0).toUpperCase()}
          {option.slice(1, option.length)}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
