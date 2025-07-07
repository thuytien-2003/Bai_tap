import React from 'react';
import styles from './style.module.css';

interface Props {
  placeholder: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  bold?: boolean;
  placeholderColor?: string;
  rightIconBg?: string;
}

const SearchInput: React.FC<Props> = ({
  placeholder,
  leftIcon,
  rightIcon,
  bold,
  placeholderColor = '#999',
  rightIconBg,
}) => {
  return (
    <div className={styles.searchBox}>
      {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}

      <input
        type="text"
        className={`${styles.searchInput} ${bold ? styles.bold : ''}`}
        placeholder={placeholder}
        style={{ color: placeholderColor }}
      />

      {rightIcon && (
        <div
          className={styles.rightIconWrapper}
          style={{ backgroundColor: rightIconBg || 'transparent' }}
        >
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default SearchInput;