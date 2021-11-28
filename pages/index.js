import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Brand from '../styles/brand'

function Home() {
  return (
    <div className={styles.container}>
      <Brand title="Next.js Starter Kit" tagline="starter kit for react"/>
    </div>
  )
}

export default Home