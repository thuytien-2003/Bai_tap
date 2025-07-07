import styles from './GetStartedButton.module.css';
import { ArrowRight } from 'lucide-react';

export default function GetStartedButton() {
  return (
    <button className={styles.button}>
      <span>Get started</span>
      <ArrowRight size={18} />
    </button>
  );
}