import React from 'react';
import {DatePicker} from 'antd';
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <DatePicker/>
      </main>
    </>
  )
}
