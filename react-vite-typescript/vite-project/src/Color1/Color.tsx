import React, { useState } from "react";
import styles from "./Color.module.css";

const colors = ["Đen", "Hồng", "Xanh"];

const Color: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("Đen");

  return (
    <div className={styles.wrapper}>
      <span className={styles.label} style={{ fontWeight: "bold" , fontSize: 20}}>Màu:</span>
      <div className={styles.options}>
        {colors.map((color) => (
          <button
            key={color}
            className={`${styles.colorBtn} ${
              selectedColor === color ? styles.active : ""
            }`}
            onClick={() => setSelectedColor(color)}
          >
            {color}
            {selectedColor === color && <span className={styles.check}>✔</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Color;