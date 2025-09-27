import styles from './styles.module.css'

type GenericHtmlPros = {
    children: React.ReactNode
}


const Generichtml = ({ children }: GenericHtmlPros) => {
    return (
        <div className={styles.genericHtml}>
            {children}
        </div>
    )
}

export default Generichtml