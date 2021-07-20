import React from 'react';
import s from './Statistic.module.css';

const Statistics = ({
  good,
  bad,
  neutral,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={s.statistic__box}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positivePercentage} %</p>
    </div>
  );
};

export default Statistics;
