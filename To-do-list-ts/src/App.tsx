import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.module.css'

import logo from './assets/logo.svg'
import Planner from './assets/planner.svg'

import Input from './components/Input/Input'
import Button from './components/Button/Button'

function App() {

  return (
    <div className={styles.container}>
      <div className={styles.cover}></div>

      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <img src={logo} alt="" />
          <h1 className={styles.titleTo}>to</h1>
          <h1 className={styles.titleDo}>do</h1>
        </div>

        <section className={styles.addTaskSection}>
          <Input placeholder='Insira sua tarefa'/>
          <Button/>
        </section>

        <section className={styles.taskSection}>
          <div className={styles.headerTasks}>
            <div className={styles.createdTaks}><span>Tarefas Criadas</span><span className={styles.counterSpan}>0</span></div>
            <div className={styles.completedTaks}><span>Tarefas Concluídas</span><span className={styles.counterSpan}>0</span></div>
          </div>
        </section>

        <div className={styles.taskTable}>
          <div className={styles.emptyTable}>
            <img src={Planner} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
