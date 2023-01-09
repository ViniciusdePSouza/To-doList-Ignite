import { useState } from 'react'
import styles from './Button.module.css'
import plusIcon from '../../assets/plusIcon.svg'

export function Button(props: any) {
    return (
        <button className={styles.button}>
            Criar
            <img src={plusIcon}/>
        </button>
    )
}