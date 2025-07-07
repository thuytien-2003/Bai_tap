import React from 'react'
import styles from './Ex1_ButtonClick.module.css';

function Ex3_ToggleSwitch() {
    const [isOn, setIsOn] = React.useState(false);
    const handleToggle = () => {
        setIsOn(!isOn);
    };
    
  return (
    <div className={styles.centerBox}>
        <h2>Exercise 3: Toggle Switch</h2>
        <button className={styles.button} onClick={handleToggle}>{isOn? 'Turn ON' : 'Turn OFF'}</button>
        <p>State: {isOn? 'OFF' : 'ON'}</p>
    </div>
  )
}

export default Ex3_ToggleSwitch