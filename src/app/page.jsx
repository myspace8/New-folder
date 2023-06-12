import styles from './Home.module.css';
import Men from './components/menProducts';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my shop</h1>

        <p className={styles.description}>Want to buy? Just WhatsApp!</p>
        <Men />
      </main>

      <footer className={styles.footer}>
        <a href="#!" rel="noopener noreferrer">
          Made with ❤️ by JO
        </a>
        <p className='text-sm'>Please Note, this site is for experimental use only.</p>
      </footer>
    </div>
  );
}
