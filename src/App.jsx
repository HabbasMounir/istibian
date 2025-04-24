import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Survey from './components/Survey/Survey';
import ThankYou from './components/ThankYou/ThankYou';
import DataPage from './components/DataPage/DataPage';
import { clearAnswers, initDB, saveAnswers } from './services/indexedDB';
import './index.css';
import { surveyData } from './data';
import { Helmet } from 'react-helmet';

const App = () => {
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [res, setRes] = useState(false);

  // useEffect(() => {
  //   initDB();
  //   const completed = localStorage.getItem('surveyCompleted');
  //   if (completed) {
  //     setIsCompleted(true);
  //     setShowThankYou(true);
  //   }
  // }, []);


  // Define your current survey version
const CURRENT_SURVEY_VERSION = "2.0";

useEffect(() => {
  initDB();
  
  const completed = localStorage.getItem('surveyCompleted');
  const storedVersion = localStorage.getItem('surveyVersion');
  
  // Check if survey is completed AND if the completed version matches current version
  if (completed === 'true') {
    setIsCompleted(true);
    setShowThankYou(true);
  } else {
    // Either survey not completed or an older version was completed
    setIsCompleted(false);
    setShowThankYou(false);
    
  
  }
  if (!(storedVersion === CURRENT_SURVEY_VERSION)) {
    console.log('CURRENT_SURVEY_VERSION',storedVersion === CURRENT_SURVEY_VERSION)
    setRes(!res)
    handleRestart()
    localStorage.setItem('surveyVersion', CURRENT_SURVEY_VERSION);
    localStorage.setItem('surveyCompleted', 'false');
  } 
  


}, [res]);
useEffect(() => {
console.log(answers)
},[answers])
const handleRestart = async () => {
  console.log('restart')
  setAnswers({});
  setIsCompleted(false);
  await clearAnswers();
  await saveAnswers(answers);

};

  const handleComplete = (finalAnswers) => {
    setAnswers(finalAnswers);
    setIsCompleted(true);
  };

  const handleSubmitSuccess = () => {
    localStorage.setItem('surveyCompleted', 'true');
    localStorage.setItem('surveyVersion', CURRENT_SURVEY_VERSION);
  };

  return (
    <Router>
    

      <>
       
          <Routes>
          <Route path="/data" element={<DataPage />} />
            <Route path="*" element={
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
                    answers={answers} 
                    setAnswers={setAnswers}
                  />
                )}
          <footer>
            <p>شكراً لمشاركتكم في هذا الاستبيان - TODOTS © 2025</p>
          </footer>
          </div>

            } />
          </Routes>
         
        
      </>
    </Router>
  );
};

export default App;