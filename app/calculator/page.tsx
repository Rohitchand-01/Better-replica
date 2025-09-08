import Calculator from "@/components/Calculator/Calculator"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import styles from './page.module.scss'

type Props = {}

const page = (props: Props) => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.calculator_container}>
        <Calculator/>
      </div>
      <Footer />
    </div>
  )
}

export default page