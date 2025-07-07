import { useState } from "react";
import styles from "./Ex1_ButtonClick.module.css";

function Ex4_HoverHighlight() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.centerBox}>
      <h2>Exercise 4: Hover Highlight</h2>
      <div
        style={{
          backgroundColor: isHovered ? "yellow" : "white",
          border: "1px solid #ccc",
          padding: "20px",
          width: "100px",
          textAlign: "center",
          cursor: "pointer",
          transition: "background-color 0.5s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover Highlight
      </div>
    </div>
  );
}

export default Ex4_HoverHighlight;
