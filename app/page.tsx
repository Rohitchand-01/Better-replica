import Navbar from "@/components/Navbar/Navbar";
import styles from './page.module.scss'
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Questions from "@/components/AskQuestion/Questions";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <div className={styles.content}>
        <Questions/>
        <Footer/>
      </div>
    </div>
  );
}
