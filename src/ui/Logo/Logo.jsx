import styles from './Logo.module.css'
function Logo() {
    return (
        <div className={styles.logo}>
            <img className={styles.logoImg} src="../../../public/logo.png" alt="inclufi logo" />
        </div>
    )
}

export default Logo
