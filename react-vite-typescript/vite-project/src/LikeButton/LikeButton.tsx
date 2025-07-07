import styles from './LikeButton.module.css';
import React from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

const LikeButton = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>LikeButton</h2>
      <button
        className={styles.button}
        onClick={() => setIsLiked((prev) => !prev)}
        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <span className={styles.icon}>
          {isLiked ? (
            <AiFillLike size={24} color="#222" />
          ) : (
            <AiOutlineLike size={24} color="#000000" />
          )}
        </span>
        {isLiked ? 'Thank you!' : 'Click like if this post is useful to you !'}
      </button>
    </div>
  );
};

export default LikeButton;