import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css';

const Header = ({ currentProgress }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Make</span>
      </div>
      <h1>استبيان حول دور المؤثرين في بناء شخصية العلامة</h1>
      <p>Make Cosmetic DZ</p>
      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${currentProgress}%` }}
        />
      </div>
    </header>
  );
};

export default Header;