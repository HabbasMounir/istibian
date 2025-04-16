import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Survey from './components/Survey/Survey';
import ThankYou from './components/ThankYou/ThankYou';
import DataPage from './components/DataPage/DataPage';
import { initDB } from './services/indexedDB';
import './index.css';
import { surveyData } from './data';

const App = () => {
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    initDB();
    const completed = localStorage.getItem('surveyCompleted');
    if (completed) {
      setIsCompleted(true);
      setShowThankYou(true);
    }
  }, []);

 

  const handleComplete = (finalAnswers) => {
    setAnswers(finalAnswers);
    setIsCompleted(true);
  };

  const handleSubmitSuccess = () => {
    localStorage.setItem('surveyCompleted', 'true');
  };

  return (
    <Router>
      <>
       
          <Routes>
            <Route path="/" element={
               <div className="container">
                <Header currentProgress={answers ? Object.keys(answers).length / surveyData.sections.reduce((acc, section) => acc + section.questions.length, 0) * 100 : 0} />
                {showThankYou ? (
                  <ThankYou />
                ) : (
                  <Survey
                    surveyData={surveyData}
                    onComplete={handleComplete}
                    onSubmitSuccess={() => {
                      handleSubmitSuccess();
                      setShowThankYou(true);
                    }}
                  />
                )}
          <footer>
            <p>شكراً لمشاركتكم في هذا الاستبيان - TODOTS © 2025</p>
          </footer>
          </div>

            } />
            <Route path="/data" element={<DataPage />} />
          </Routes>
         
        
      </>
    </Router>
  );
};

export default App;