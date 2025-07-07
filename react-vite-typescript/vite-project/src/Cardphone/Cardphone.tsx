// NewsSection.tsx
import React, { useState } from 'react';
import styles from './Cardphone.module.css';

interface NewsCardProps {
  image: string;
  title: string;
  views: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, title, views }) => {
  return (
    <div className={styles.newsCard}>
      <img src={image} alt={title} className={styles.newsImage} />
      <div className={styles.newsContent}>
        <h3 className={styles.newsTitle}>{title}</h3>
        <p className={styles.newsViews}>{views} lượt xem</p>
      </div>
    </div>
  );
};

interface NewsItem {
  image: string;
  title: string;
  views: number;
}

const NewsSection: React.FC = () => {
  const [newsData] = useState<NewsItem[]>(
    [
      {
        image: '/images/1.jpg',
        title: 'Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz',
        views: 140,
      },
      {
        image: '/images/2.jpg',
        title: 'Google Pixel 5a dự kiến sẽ được ra mắt cùng thời điểm với Android 12',
        views: 127,
      },
      {
        image: '/images/3.jpg',
        title: 'Galaxy A52 4G lộ diện trên Google Play Console Xác nhận dùng chip Snapdragon 720',
        views: 55,
      },
      {
        image: '/images/4.jpg',
        title: 'Galaxy A82 5G chuẩn bị ra mắt với chip flagship và màn hình trượt độc đáo, Samfans gom lúa đi là vừa',
        views: 55,
      },
    ]
  );

  return (
    <div className={styles.newsList}>
      <div className={styles.newsHeader}>
        <h2 className={styles.newsHeading}>TIN MỚI</h2>
        <a href="#" className={styles.newsMore}>Xem thêm</a>
      </div>
      <div className={styles.newsGrid}>
        {newsData.map((item, index) => (
          <NewsCard
            key={index}
            image={item.image}
            title={item.title}
            views={item.views}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
