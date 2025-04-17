import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/init';
import { collection, getDocs } from 'firebase/firestore/lite';
import styles from './DataPage.module.css';

const DataPage = () => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const answersCollection = collection(db, 'answers');
        const answersSnapshot = await getDocs(answersCollection);
        const answersList = answersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAnswers(answersList);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchAnswers();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loader}></div>
        <p>Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Survey Responses</h1>
      <button
        className={styles.downloadButton}
        onClick={() => {
          const headers = Object.keys(answers[0] || {});
          const csvContent = [
            headers.join(','),
            ...answers.map(answer => 
              headers.map(header => {
                const value = answer[header];
                return header === 'timestamp' && value
                  ? new Date(value.seconds * 1000).toLocaleString()
                  : value;
              }).join(',')
            )
          ].join('\n');
          const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'survey_responses.csv';
          link.click();
        }}
      >
        Download CSV
      </button>
      <div className={styles.tableContainer}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {answers[0] && Object.keys(answers[0]).map(key => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {answers.map(answer => (
                <tr key={answer.id}>
                  {Object.entries(answer).map(([key, value]) => (
                    <td key={key}>
                      {key === 'timestamp' && value
                        ? new Date(value.seconds * 1000).toLocaleString()
                        : value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataPage;

