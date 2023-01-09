import { useState } from 'react'
import styles from './Button.module.css'
import plusIcon from '../../assets/plusIcon.svg'

export function Button(props: any) {
    return (
        <button className={styles.button} onClick={props.onClick} disabled={props.isDisabled}>
            Criar
            <img src={plusIcon}/>
        </button>
    )
}