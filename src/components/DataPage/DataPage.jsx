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
          const csvContent = answers.map(answer => {
            return [
              answer.id,
              answer.age,
              ...[...Array(5)].map((_, i) => answer[`competence${i + 1}`]),
              ...[...Array(5)].map((_, i) => answer[`excitement${i + 1}`]),
              answer.frequency,
              answer.gender,
              answer.id,
              answer.occupation,
              answer.platform,
              ...[...Array(5)].map((_, i) => answer[`ruggedness${i + 1}`]),
              ...[...Array(5)].map((_, i) => answer[`sincerity${i + 1}`]),
              ...[...Array(5)].map((_, i) => answer[`sophistication${i + 1}`]),
              answer.timestamp ? new Date(answer.timestamp.seconds * 1000).toLocaleString() : 'N/A'
            ].join(',');
          }).join('\n');
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
              <th>Document ID</th>
              <th>Age</th>
              {[...Array(5)].map((_, i) => (
                <th key={`competence${i + 1}`}>Competence {i + 1}</th>
              ))}
              {[...Array(5)].map((_, i) => (
                <th key={`excitement${i + 1}`}>Excitement {i + 1}</th>
              ))}
              <th>Frequency</th>
              <th>Gender</th>
              <th>ID</th>
              <th>Occupation</th>
              <th>Platform</th>
              {[...Array(5)].map((_, i) => (
                <th key={`ruggedness${i + 1}`}>Ruggedness {i + 1}</th>
              ))}
              {[...Array(5)].map((_, i) => (
                <th key={`sincerity${i + 1}`}>Sincerity {i + 1}</th>
              ))}
              {[...Array(5)].map((_, i) => (
                <th key={`sophistication${i + 1}`}>Sophistication {i + 1}</th>
              ))}
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {answers.map(answer => (
              <tr key={answer.id}>
                <td>{answer.id}</td>
                <td>{answer.age}</td>
                {[...Array(5)].map((_, i) => (
                  <td key={`competence${i + 1}`}>{answer[`competence${i + 1}`]}</td>
                ))}
                {[...Array(5)].map((_, i) => (
                  <td key={`excitement${i + 1}`}>{answer[`excitement${i + 1}`]}</td>
                ))}
                <td>{answer.frequency}</td>
                <td>{answer.gender}</td>
                <td>{answer.id}</td>
                <td>{answer.occupation}</td>
                <td>{answer.platform}</td>
                {[...Array(5)].map((_, i) => (
                  <td key={`ruggedness${i + 1}`}>{answer[`ruggedness${i + 1}`]}</td>
                ))}
                {[...Array(5)].map((_, i) => (
                  <td key={`sincerity${i + 1}`}>{answer[`sincerity${i + 1}`]}</td>
                ))}
                {[...Array(5)].map((_, i) => (
                  <td key={`sophistication${i + 1}`}>{answer[`sophistication${i + 1}`]}</td>
                ))}
                <td>
                  {answer.timestamp ? new Date(answer.timestamp.seconds * 1000).toLocaleString() : 'N/A'}
                </td>
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

