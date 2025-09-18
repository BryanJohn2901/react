import styles from './styles.module.css'

type HeadingProps = {
  children: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className={styles.heading}>{children}</h1>
  )
}

export default Heading
