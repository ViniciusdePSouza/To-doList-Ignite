import { useState } from 'react'
import styles from './Task.module.css'
import Garbage from '../../assets/garbage.svg'

export function Task(props: any) {
    
    function handleDelete(task: string) {
        task = props.description
        props.onDelete(task)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.checkboxWrapper}>
                <input type="checkbox" id="chk" name="chk"/>
                <label htmlFor="chk"></label>
            </div>
            <p>{props.description}</p>
            <button onClick={handleDelete}>
                <img src={Garbage} alt="" />
            </button>
        </div>
    )
}

