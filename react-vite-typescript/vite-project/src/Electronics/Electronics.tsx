//import React from 'react';
import styles from './Electronics.module.css';

type Product = {
  image: string;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
};

const electronics: Product[] = [
  {
    image: '/images/5.png',
    name: 'Cáp chuyển đổi USB-C sang SD',
    price: '1.290.000đ',
    oldPrice: '1.720.000đ',
    discount: '-25%',
  },
  {
    image: '/images/6.jpg',
    name: 'Adapter sạc Apple Type C 20W',
    price: '520.000đ',
  },
  {
    image: '/images/7.jpg',
    name: 'Cáp sạc Lightning 2m',
    price: '840.000đ',
  },
  {
    image: '/images/8.jpg',
    name: 'AirPods 3',
    price: '890.000đ',
    oldPrice: '1.450.000đ',
    discount: '-20%',
  },
];

const Electronics = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Phụ kiện tương thích</h2>
      <div className={styles.grid}>
        {electronics.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.name} className={styles.image} />
              {item.discount && (
                <div className={styles.discount}>{item.discount}</div>
              )}
            </div>
            <p className={styles.name}>{item.name}</p>
            <div className={styles.priceGroup}>
              <span className={styles.price}>{item.price}</span>
              {item.oldPrice && (
                <span className={styles.oldPrice}>{item.oldPrice}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
