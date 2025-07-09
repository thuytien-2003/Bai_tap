import { useState } from "react";
import styles from "./Ex1_ButtonClick.module.css";

function Ex8_DropdownSelection() {
  const [selectedFruit, setSelectedFruit] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedFruit(event.target.value);
    console.log("Selected fruit:", event.target.value);
  };
  return (
    <div className={styles.centerBox}>
      <h2>Exercise 8: Dropdown Selection</h2>
      <select value={selectedFruit} onChange={handleChange}>
        <option value="" disabled>--Select a fruit--</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
      </select>
      <p>Selected fruit: {selectedFruit}</p>
    </div>
  );
}

export default Ex8_DropdownSelection;
