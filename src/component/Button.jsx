import styles from './Button.module.css'
function Button({children,tip,onClick}) {
    return (
        <button className={`${styles.btn} ${styles[tip]}`} onClick={onClick} >
            {children}  
        </button>
    )
}

export default Button
