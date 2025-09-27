import styles from './styles.module.css'

const Footer = () => {
  return (
  <footer className={styles.footer}>
    <a href="#">Entenda como funciona a técnica pomodoro</a>
    <a href="#">Chronos Pomodoro - &copy; {new Date().getFullYear()} Desenvolvido por Bryan Johnson</a>
  </footer>
  )
}

export default Footer
