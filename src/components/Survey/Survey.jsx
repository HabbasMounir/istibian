import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUser, faHeart, faBolt, faStar } from '@fortawesome/free-solid-svg-icons';
import Question from '../Question/Question';
import SurveyResults from '../SurveyResults/SurveyResults';
import { saveAnswers, getAnswers, clearAnswers } from '../../services/indexedDB';
import styles from './Survey.module.css';

const Survey = ({ surveyData, onComplete, onSubmitSuccess }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  useEffect(() => {
    const loadSavedAnswers = async () => {
      const savedAnswers = await getAnswers();
      if (savedAnswers) {
        setAnswers(savedAnswers);
      }
    };
    loadSavedAnswers();
  }, []);

  const handleAnswer = async (questionId, answer) => {
    const newAnswers = {
      ...answers,
      [questionId]: answer
    };
    setAnswers(newAnswers);
    await saveAnswers(newAnswers);
  };

  const getProgress = () => {
    const totalQuestions = surveyData.sections.reduce(
      (acc, section) => acc + section.questions.length,
      0
    );
    const answeredQuestions = Object.values(answers).filter(answer => answer !== null && answer !== undefined).length;
    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  const isCurrentSectionComplete = () => {
    const currentQuestions = currentSectionData.questions;
    return currentQuestions.every(question => answers[question.id] !== undefined && answers[question.id] !== null);
  };

  const handleNext = () => {
    if (!isCurrentSectionComplete()) {
      alert('الرجاء الإجابة على جميع الأسئلة في هذا القسم');
      return;
    }

    if (currentSection < surveyData.sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      setIsCompleted(true);
      if (onComplete) {
        onComplete(answers);
      }
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'fa-eye': return faEye;
      case 'fa-user': return faUser;
      case 'fa-heart': return faHeart;
      case 'fa-bolt': return faBolt;
      case 'fa-star': return faStar;
      default: return faEye;
    }
  };

  const currentSectionData = surveyData.sections[currentSection];

  const handleRestart = async () => {
    setAnswers({});
    setCurrentSection(0);
    setIsCompleted(false);
    await clearAnswers();
  };

  return (
    <div className={styles.surveyContainer}>
      {isCompleted ? (
        <SurveyResults 
          answers={answers} 
          onRestart={handleRestart} 
          onSubmitSuccess={onSubmitSuccess}
        />
      ) : (
      <div className={styles.surveyCard}>
        <div className={styles.sectionTitle}>
          <FontAwesomeIcon icon={getIcon(currentSectionData.icon)} />
          {currentSectionData.title}
        </div>
        
        {currentSectionData.instructions && (
          <div className={styles.instructions}>
            {currentSectionData.instructions}
          </div>
        )}

        {currentSectionData.questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            onAnswer={handleAnswer}
            currentAnswer={answers[question.id]}
          />
        ))}

        <div className={styles.navigationButtons}>
          <button 
            onClick={handlePrev} 
            disabled={currentSection === 0}
            className={styles.button}
          >
            السابق
          </button>
          <div className={styles.progress}>
            {getProgress()}%
          </div>
          <button 
            onClick={handleNext}
            className={styles.button}
            disabled={!isCurrentSectionComplete()}
          >
            {currentSection === surveyData.sections.length - 1 ? 'إنهاء' : 'التالي'}
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default Survey;