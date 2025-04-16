import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Question.module.css';

const Question = ({ question, onAnswer, currentAnswer }) => {
  const renderOptions = () => {
    switch (question.type) {
      case 'radio':
        return (
          <div className={styles.options}>
            {question.options.map((option) => (
              <label key={option.value || option} className={styles.option}>
                <input
                  type="radio"
                  name={question.id}
                  value={option.value || option}
                  checked={currentAnswer === (option.value || option)}
                  onChange={(e) => onAnswer(question.id, e.target.value)}
                />
                <span className={styles.checkmark} />
                {option.label || option}
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className={styles.options}>
            {question.options.map((option) => (
              <label key={option.value} className={styles.option}>
                <input
                  type="checkbox"
                  name={question.id}
                  value={option.value}
                  checked={currentAnswer?.includes(option.value)}
                  onChange={(e) => {
                    const value = e.target.value;
                    const newAnswer = currentAnswer || [];
                    if (e.target.checked) {
                      onAnswer(question.id, [...newAnswer, value]);
                    } else {
                      onAnswer(question.id, newAnswer.filter(v => v !== value));
                    }
                  }}
                />
                <span className={styles.checkboxMark} />
                {option.label}
              </label>
            ))}
          </div>
        );

      case 'likert':
        return (
          <div className={styles.likertContainer}>
            <div className={styles.likertOptions}>
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value} className={styles.likertOption}>
                  <div
                    className={`${styles.likertDot} ${currentAnswer === value ? styles.selected : ''}`}
                    onClick={() => onAnswer(question.id, value)}
                  >
                    {value}
                  </div>
                  <div className={styles.likertLabel}>
                    {value === 1 ? 'غير موافق بشدة' :
                     value === 2 ? 'غير موافق' :
                     value === 3 ? 'محايد' :
                     value === 4 ? 'موافق' :
                     value === 5 ? 'موافق بشدة' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.question}>
      <div className={styles.questionText}>
        <span>{question.id}</span>
        {question.text}
      </div>
      {renderOptions()}
    </div>
  );
};

export default Question;