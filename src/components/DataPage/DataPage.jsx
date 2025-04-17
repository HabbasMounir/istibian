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

  const handleDownloadCSV = () => {
    if (answers.length === 0) return;
    
    const headers = Object.keys(answers[0] || {});
    const csvContent = [
      headers.join(','),
      ...answers.map(answer =>
        headers.map(header => {
          const value = answer[header];
          
          if (value === null || value === undefined) {
            return '';
          } else if (header === 'timestamp' && value?.seconds) {
            return `"${new Date(value.seconds * 1000).toLocaleString()}"`;
          } else if (Array.isArray(value)) {
            return `"${value.join(';')}"`;
          } else if (typeof value === 'object') {
            return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
          } else if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          
          return value;
        }).join(',')
      )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'survey_responses.csv';
    link.click();
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loader}></div>
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
      <div className={styles.header}>
        <h1>Survey Responses</h1>
        <button className={styles.downloadButton} onClick={handleDownloadCSV}>
          Export CSV
        </button>
      </div>

      <div className={styles.tableContainer}>
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
                    {key === 'timestamp' && value?.seconds
                      ? new Date(value.seconds * 1000).toLocaleString()
                      : Array.isArray(value)
                        ? value.join('; ')
                        : typeof value === 'object' && value !== null
                          ? JSON.stringify(value)
                          : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataPage;