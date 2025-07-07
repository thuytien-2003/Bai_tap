import React from 'react';
import { FaStar } from 'react-icons/fa6';

interface RatingProps {
  value?: number;
}

const ratingLabels = [
  { label: 'Tệ' },
  { label: 'Không hài lòng' },
  { label: 'Bình thường' },
  { label: 'Hài lòng' },
  { label: 'Tuyệt vời' },
];

const Rating: React.FC<RatingProps> = ({ value = 3 }) => {
  const [rating, setRating] = React.useState(value);

  const handleClick = (index: number) => {
    setRating(index);
  };

  const currentLabel = ratingLabels[rating - 1];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif', marginTop: '40px' }}>
      <span style={{ fontSize: '16px' }}>Chọn đánh giá của bạn</span>
      <div style={{ display: 'flex', gap: '4px' }}>
        {[1, 2, 3, 4, 5].map((index) => (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            style={{
              color: index <= rating ? '#ffa500' : '#ccc',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
      <span
        style={{
          backgroundColor: '#4caf50', 
          color: 'white',
          fontWeight: 'bold',
          padding: '4px 10px',
          borderRadius: '4px',
          fontSize: '13px',
        }}
      >
        {currentLabel.label}
      </span>
    </div>
  );
};

export default Rating;