import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { MainTitle, IndexCardList } from '@/components/organizations'
import { mainTitle, indexCards } from '../store/dummydata';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Winterguard's Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainTitle {...mainTitle}/>
        <IndexCardList indexCards={indexCards} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/winterguard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}Winterguard
        </a>
      </footer>
    </div>
  )
}
