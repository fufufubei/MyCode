import React from 'react';
import styles from './index.css';
import Link from 'umi/link'
import Login from './login'
const login =false;
export default function() {
    if(login){
        return (
            <div className={styles.normal}>
              <div className={styles.welcome} />
              <ul className={styles.list}>
                <li>{login} </li>
                <li>
                  <a href="https://umijs.org/guide/getting-started.html">
                    Getting Started
                  </a>
                </li>
                <li><Link to='/list'>go to list</Link></li>
              </ul>
            </div>
          );
    }else{
        return (
            <Login></Login>
        )
    }
 
}
