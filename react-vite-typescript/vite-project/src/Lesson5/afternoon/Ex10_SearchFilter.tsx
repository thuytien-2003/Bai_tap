import { useState } from "react";
import styles from "./Ex1_ButtonClick.module.css";

function Ex10_SearchFilter() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

  const handleChange = (): void => {
    const input = document.getElementById("search") as HTMLInputElement;
    setSearchTerm(input.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className={styles.centerBox}>
      <h2>Exercise 10: SearchFilter</h2>
      <input
        id="search"
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No matching items</li>
        )}
      </ul>
    </div>
  );
}

export default Ex10_SearchFilter;
