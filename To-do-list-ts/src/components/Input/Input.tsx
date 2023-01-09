import { useState } from 'react'
import styles from './Input.module.css'
import logo from './assets/logo.svg'

export function Input(props: any) {
    return (
        <input className={styles.input} type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
    )
}

