const DB_NAME = 'surveyDB';
const DB_VERSION = 1;
const STORE_NAME = 'answers';

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
  });
};

export const saveAnswers = async (answers) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const request = store.put({
      id: 'current',
      answers,
      timestamp: new Date().toISOString()
    });

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};

export const getAnswers = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get('current');

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result?.answers || null);
  });
};

export const clearAnswers = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete('current');

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
};