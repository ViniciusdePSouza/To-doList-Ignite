import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.module.css'

import logo from './assets/logo.svg'
import Planner from './assets/planner.svg'

import { Input } from './components/Input/Input'
import { Button } from './components/Button/Button'
import { Task } from './components/Task/Task'


function App() {

  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTask] = useState<string>('')
  const [isEmpty, setIsEmpty] = useState<boolean>(true)
  
  console.log(tasks.length)
  function handleClick(event: any) {
    setIsEmpty(false)
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  
  function deleteTask(taskToDelete: string) {
    const commentsWithoutDeleteOne = tasks.filter(tasks => tasks !== taskToDelete)
    
    if (tasks.length == 0) {
      setIsEmpty((state) => {
        state = true
        return state
      })
    }

    setTasks(commentsWithoutDeleteOne)
}

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask((state) => {
      return state = event.target.value
    })
  }

  function handleInvalidComment(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório para adicionar uma nova tarefa à sua agenda')
  }

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
          <Input placeholder='Insira sua tarefa' onChange={handleNewTask} required onInvalid={handleInvalidComment}/>
          <Button onClick={handleClick} />
        </section>

        <section className={styles.taskSection}>
          <div className={styles.headerTasks}>
            <div className={styles.createdTaks}><span>Tarefas Criadas</span><span className={styles.counterSpan}>0</span></div>
            <div className={styles.completedTaks}><span>Tarefas Concluídas</span><span className={styles.counterSpan}>0</span></div>
          </div>
        </section>

        <div className={styles.taskTable}>
          <div className={isEmpty ? styles.emptyTable : styles.hide}>
            <img src={Planner} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>

          <div className={isEmpty ? styles.hide : styles.tasks}>
            {tasks && tasks.map(task => {
              return <Task description={task} onDelete={deleteTask} key={task}/>
            })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
