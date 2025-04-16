// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faChevronUp, faRedo, faPaperPlane, faClipboardList } from '@fortawesome/free-solid-svg-icons';
// import styles from './SurveyResults.module.css';
// import { addanswer } from '../../firebase/api';

// const SurveyResults = ({ answers, onRestart }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState(null);
//   // const handleSubmit = () => {
//   //   // Here you would implement the logic to send the answers to your backend
//   //   console.log('Submitting answers:', answers);
//   // };

//   const handleSubmit = async () => {
//     try {
//       // Show loading state if desired
//       setIsLoading(true);
      
//       const result = await addanswer(answers);
      
//       if (result.success) {
//         console.log('Survey submitted successfully with ID:', result.id);
        
//         // Reset form or navigate to a thank you page
//         // setAnswers({}); // Clear the form
//         // Or navigate: navigate('/thank-you');
        
//         // Show success message to user
//         setMessage({ type: 'success', text: 'Your survey has been submitted successfully!' });
//       } else {
//         console.error('Error submitting survey:', result.error);
//         setMessage({ type: 'error', text: 'Failed to submit survey. Please try again.' });
//       }
//     } catch (error) {
//       console.error('Error in survey submission:', error);
//       setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className={styles.resultsContainer}>
//       <div className={styles.summaryHeader}>
//         <FontAwesomeIcon icon={faClipboardList} />
//         <span>ملخص الإجابات</span>
//         <FontAwesomeIcon 
//           icon={isOpen ? faChevronUp : faChevronDown} 
//           onClick={() => setIsOpen(!isOpen)}
//           style={{ cursor: 'pointer' }}
//         />
//       </div>
      
//       {isOpen && (
//         <div className={styles.answersContainer}>
//           {Object.entries(answers).map(([questionId, answer]) => (
//             <div key={questionId} className={styles.answerItem}>
//               <strong>{questionId}</strong>
//               <span>
//                 {Array.isArray(answer) 
//                   ? answer.join('، ') 
//                   : typeof answer === 'number'
//                     ? ['غير موافق بشدة', 'غير موافق', 'محايد', 'موافق', 'موافق بشدة'][answer - 1]
//                     : answer}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className={styles.actionButtons}>
//         <button className={styles.submitButton} onClick={handleSubmit}>
//           <FontAwesomeIcon icon={faPaperPlane} />
//           إرسال الإجابات
//         </button>
//         <button className={styles.restartButton} onClick={onRestart}>
//           <FontAwesomeIcon icon={faRedo} />
//           إعادة الاستبيان
//           {isLoading}
//           {message}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SurveyResults;







import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faRedo, faPaperPlane, faClipboardList, faSpinner, faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import styles from './SurveyResults.module.css';
import { addanswer } from '../../firebase/api';

const SurveyResults = ({ answers, onRestart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'loading', 'success', 'error'

  const handleSubmit = async () => {
    try {
      // Set loading state
      setSubmissionStatus('loading');
      
      // Call your Firebase function to add the survey answer
      const result = await addanswer(answers);
      
      if (result.success) {
        console.log('Survey submitted successfully with ID:', result.id);
        setSubmissionStatus('success');
        
        // Optional: You could add a timeout to reset the status after success
        setTimeout(() => setSubmissionStatus(null), 3000);
      } else {
        console.error('Error submitting survey:', result.error);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error in survey submission:', error);
      setSubmissionStatus('error');
    }
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
        <button 
          className={`${styles.submitButton} ${submissionStatus === 'loading' ? styles.loading : ''}`} 
          onClick={handleSubmit}
          disabled={submissionStatus === 'loading' || submissionStatus === 'success'}
        >
          {submissionStatus === 'loading' ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin />
              جاري الإرسال...
            </>
          ) : submissionStatus === 'success' ? (
            <>
              <FontAwesomeIcon icon={faCheck} />
              تم الإرسال بنجاح
            </>
          ) : submissionStatus === 'error' ? (
            <>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              فشل الإرسال، حاول مرة أخرى
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faPaperPlane} />
              إرسال الإجابات
            </>
          )}
        </button>
        <button 
          className={styles.restartButton} 
          onClick={onRestart}
          disabled={submissionStatus === 'loading'}
        >
          <FontAwesomeIcon icon={faRedo} />
          إعادة الاستبيان
        </button>
      </div>
      
      {submissionStatus === 'error' && (
        <div className={styles.errorMessage}>
          حدث خطأ أثناء إرسال الإجابات. يرجى المحاولة مرة أخرى.
        </div>
      )}
    </div>
  );
};

export default SurveyResults;