import styles from './Input.module.css'

export function Input(props: any) {
    return (
        <input className={styles.input} type={props.type} placeholder={props.placeholder} onChange={props.onChange} required/>
    )
}

