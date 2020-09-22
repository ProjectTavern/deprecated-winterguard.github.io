import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { IndexCardList } from '../components/organizations'

export default function Home() {

  const indexCards = [
    {
      title: '자바스크립트',
      description: '프론트엔드 기술로 자바스크립트를 사용하고 있습니다.',
      href: 'https://google.com'
    },
    {
      title: '알고리즘',
      description: '기능 구현을 위한 알고리즘을 학습하고 있습니다.',
      href: '#'
    },
    {
      title: '포트폴리오',
      description: '이제까지 진행해온 프로젝트입니다.',
      href: '#'
    },
    {
      title: 'About',
      description: '간략한 소개입니다.',
      href: '#'
    }
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Winterguard's Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          학습기술 블로그
        </h1>
        <p className={styles.description}>
          학습기술을 적는 블로그입니다.
        </p>
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
