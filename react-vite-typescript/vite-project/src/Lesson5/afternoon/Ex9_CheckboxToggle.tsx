import {useState} from 'react'
import styles from './Ex1_ButtonClick.module.css';

function Ex9_CheckboxToggle() {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
  return (
    <div className={styles.centerBox}>
        <h2>Exercise 9: Checkbox Toggle</h2>
        <label>
            <input type="checkbox" checked={isChecked} onChange={handleToggle}/>
        Toggle me
        </label>
        <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  )
}

export default Ex9_CheckboxToggle