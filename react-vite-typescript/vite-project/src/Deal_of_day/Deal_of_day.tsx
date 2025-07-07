//import React from 'react';
import styles from './Deal_Of_Day.module.css';

const products = [
  {
    image: '/images/9.jpg',
    shop: 'YOUNG SHOP',
    name: 'LG White Front Load Steam Washer',
    link: '#',
    price: '$1,422.7',
    oldPrice: '$1,825.5',
    discount: '-39%',
  },
  {
    image: '/images/10.jpg',
    shop: 'YOUNG SHOP',
    name: 'Edifier Powered Bookshelf Speakers',
    link: '#',
    price: '$96',
    oldPrice: '$85',
    discount: '-13%',
  },
  {
    image: '/images/11.jpg',
    shop: 'YOUNG SHOP',
    name: 'Amcrest Security Camera in White Color',
    link: '#',
    price: '$62.99',
    oldPrice: '$45.9',
    discount: '-37%',
  },
  {
    image: '/images/12.jpg',
    shop: 'YOUNG SHOP',
    name: 'Grand Slam Indoor Of Show Jumping Novel',
    link: '#',
    price: '$41.99',
    oldPrice: '$32.99',
    discount: '-27%',
  },
  {
    image: '/images/13.jpg',
    shop: 'YOUNG SHOP',
    name: 'Sound Intone I65 Earphone White Version',
    link: '#',
    price: '$106.96',
    oldPrice: '$100.99',
    discount: '-6%',
  },
  {
    image: '/images/14.jpg',
    shop: 'YOUNG SHOP',
    name: 'Korea Long Sofa Fabric In Blue Navy Color',
    link: '#',
    price: '$670.2',
    oldPrice: '$567.8',
    discount: '-18%',
  },
];

const DealOfDay = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Deal of the day</h2>
        <div className={styles.timer}>End in: <span>6:17:17:39</span></div>
        <a className={styles.viewAll} href="#">View all</a>
      </div>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrap}>
              <img src={product.image} alt={product.name} className={styles.image} />
              <div className={styles.discount}>{product.discount}</div>
            </div>
            <div className={styles.shop}>{product.shop}</div>
            <div className={styles.shopLine}></div> 
            <div className={styles.priceGroup}>
              <span className={styles.price}>{product.price}</span>
              <span className={styles.oldPrice}>{product.oldPrice}</span>
              <span className={styles.off}>18% off</span>
            </div>
            <a href={product.link} className={styles.name}>{product.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealOfDay;
