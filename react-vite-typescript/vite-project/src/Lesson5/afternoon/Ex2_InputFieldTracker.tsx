import { useState } from 'react';
import styles from './Ex1_ButtonClick.module.css';

export default function Ex2_InputFieldTracker() {
  const [text, setText] = useState('Hello World!');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className={styles.centerBox}>
      <h2>Exercise 2: Input Field Tracker</h2>
      <label htmlFor="input-example">Type something:</label>
      <input id="input-example" value={text} type="text" onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}