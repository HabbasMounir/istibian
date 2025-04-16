import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faRedo, faPaperPlane, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import styles from './SurveyResults.module.css';

const SurveyResults = ({ answers, onRestart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    // Here you would implement the logic to send the answers to your backend
    console.log('Submitting answers:', answers);
  };

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.summaryHeader}>
        <FontAwesomeIcon icon={faClipboardList} />
        <span>ملخص الإجابات</span>
        <FontAwesomeIcon 
          icon={isOpen ? faChevronUp : faChevronDown} 
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer' }}
        />
      </div>
      
      {isOpen && (
        <div className={styles.answersContainer}>
          {Object.entries(answers).map(([questionId, answer]) => (
            <div key={questionId} className={styles.answerItem}>
              <strong>{questionId}</strong>
              <span>
                {Array.isArray(answer) 
                  ? answer.join('، ') 
                  : typeof answer === 'number'
                    ? ['غير موافق بشدة', 'غير موافق', 'محايد', 'موافق', 'موافق بشدة'][answer - 1]
                    : answer}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.actionButtons}>
        <button className={styles.submitButton} onClick={handleSubmit}>
          <FontAwesomeIcon icon={faPaperPlane} />
          إرسال الإجابات
        </button>
        <button className={styles.restartButton} onClick={onRestart}>
          <FontAwesomeIcon icon={faRedo} />
          إعادة الاستبيان
        </button>
      </div>
    </div>
  );
};

export default SurveyResults;