import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { MainTitle, IndexCardList } from '@/components/organizations'
import { mainTitle, indexCards } from '../store/dummydata';

import Icon, { Github } from '@/components/icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Winterguard's Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainTitle {...mainTitle} />
        <IndexCardList indexCards={indexCards} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/winterguard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <Github />
          </Icon>
        </a>
      </footer>
    </>
  )
}
