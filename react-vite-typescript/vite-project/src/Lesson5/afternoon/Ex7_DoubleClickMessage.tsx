import React, {useState} from 'react'
import styles from './Ex1_ButtonClick.module.css';

function Ex7_DoubleClickMessage() {
    const [message, setMessage] = useState(false);
    const handleDoubleClick = () => {
        setMessage(true);
        setTimeout(() => setMessage(false), 2000); // Reset message after 2 seconds
    };
  return (
    <div className={styles.centerBox}>
        <h2>Exercise 7: Double Click Message</h2>
        <button className={styles.button} onDoubleClick={handleDoubleClick}>
            Double-clicked!</button>
        {message && <p className={styles.message}>Double-clicked!!</p>}
    </div>
  )
}

export default Ex7_DoubleClickMessage