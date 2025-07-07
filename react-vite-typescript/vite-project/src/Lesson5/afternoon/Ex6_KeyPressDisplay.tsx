import React, {useState} from 'react'
import styles from './Ex1_ButtonClick.module.css';

function Ex6_KeyPressDisplay() {
    const [lastKey, setLastKey] = useState('');
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setLastKey(event.key);
    };
  return (
    <div className={styles.centerBox}>
        <h2>Exercise 6: Key Press Display</h2>
        <input 
            type="text" 
            className={styles.inputField} 
            onKeyDown={handleKeyDown} 
            placeholder="Press any key"/>
        <p>Last key: <strong>{lastKey}</strong></p>
    </div>
  )
}

export default Ex6_KeyPressDisplay