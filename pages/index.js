import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
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

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>자바스크립트 &rarr;</h3>
            <p>프론트엔드 기술로 자바스크립트를 사용하고 있습니다.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>알고리즘 &rarr;</h3>
            <p>기능 구현을 위한 알고리즘을 학습하고 있습니다.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>포트폴리오 &rarr;</h3>
            <p>이제까지 진행해온 프로젝트입니다.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>About &rarr;</h3>
            <p>
              간략한 소개입니다.
            </p>
          </a>
        </div>
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
