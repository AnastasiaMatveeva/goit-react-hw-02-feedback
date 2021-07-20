import React from 'react';
import s from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <div className={s.section__box}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
