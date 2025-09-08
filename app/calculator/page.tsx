import Calculator from "@/components/Calculator/Calculator"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import styles from './page.module.scss'

const Page = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.calculatorContainer}>
        <Calculator />
      </div>
      <Footer />
    </div>
  )
}

export default Page
