import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav className={styles.mainnav}>
          <ul>
            <Link href='/'>  <li>Home</li></Link>
            <Link href='/about'>  <li>About</li></Link>
            <Link href='/contact'>  <li>Contact</li></Link>
          </ul>
        </nav>
        <h1 className={styles.title}>Hunting Coders</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Bog title</h2>
            <p>This is the paragraph</p>
          </div>
          <div className={styles.card}>
            <h2>Bog title</h2>
            <p>This is the paragraph</p>
          </div>
          <div className={styles.card}>
            <h2>Bog title</h2>
            <p>This is the paragraph</p>
          </div>
          <div className={styles.card}>
            <h2>Bog title</h2>
            <p>This is the paragraph</p>
          </div>
        </div>
      </main>
    </>
  )
}
