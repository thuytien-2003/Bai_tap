import { useState } from "react";
import styles from "./Ex1_ButtonClick.module.css";

function Ex5_FormSubmissionAlert() {
  const [inputText, setInputText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`You submitted: ${inputText}`);
    setInputText(""); // Clear the input field after submission
  };
  return (
    <div className={styles.centerBox}>
      <h2>Exercise 5: Form Submission Alert</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Enter something..."
        />
        <button className={styles.button} type="submit">Submit</button>{" "}
      </form>
    </div>
  );
};

export default Ex5_FormSubmissionAlert;
