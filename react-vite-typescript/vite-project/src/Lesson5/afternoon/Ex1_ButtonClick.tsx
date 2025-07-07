import {useState} from 'react'
import styles from './Ex1_ButtonClick.module.css';

function Ex1_ButtonClick() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

  return (
    <div className={styles.centerBox}>
        <h2>Exercise 1: Button Click Counter</h2>
        <button className={styles.button} onClick={handleClick}>Click me</button>
        <p>You clicked {count} times.</p>
    </div>
  )
}

export default Ex1_ButtonClick;