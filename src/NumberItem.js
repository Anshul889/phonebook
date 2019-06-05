import React from 'react';
import styles from './NumberItem.module.css';

const NumberItem = (props) => {
  return (
    <div className={styles.NumberItem}>
      <div className={styles.container}>
        <h4>{props.title}</h4>
        <p>{props.phonenumber}</p>
        <p>{props.address}</p>
      </div>
    </div>
  )
}

export default NumberItem;
