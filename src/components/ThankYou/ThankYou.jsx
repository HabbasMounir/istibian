import React from 'react';
import styles from './ThankYou.module.css';
import { FaCheckCircle } from 'react-icons/fa';

const ThankYou = () => {
    function deleteIsComplete() {
        localStorage.removeItem('surveyCompleted');
      }
  return (
    <div className={styles.thankYouContainer}>
      <div className={styles.thankYouCard}>
        <FaCheckCircle onDoubleClick={deleteIsComplete} className={styles.icon} />
        <h2>شكراً لك!</h2>
        <p>نشكرك على وقتك الثمين في إكمال هذا الاستبيان</p>
        <p>مشاركتك قيمة جداً بالنسبة لنا</p>
        {/* <div>start again </div> */}
      </div>
    </div>
  );
};

export default ThankYou;