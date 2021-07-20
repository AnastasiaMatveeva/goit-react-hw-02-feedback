import React from 'react';
import s from './Notification.module.css';
const Notification = ({ message }) => {
  return (
    <div className={s.notification__box}>
      <h4>{message}</h4>
    </div>
  );
};

export default Notification;
