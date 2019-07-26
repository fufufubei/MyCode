
import React from 'react';
import router from 'umi/router'
import styles from './list.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page list</h1>
      <div className={styles.back} onClick={()=>{router.goBack()}}>go back</div>
    </div>
  );
}
