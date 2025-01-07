import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'

import styles from './App.module.css'

import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Empty } from './components/List/Empty'
// import { Header as ListHeader } from './components/List/Header'
// import { Item } from './components/List/Item'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  // const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask() {
    // if (!inputValue) {
      return
    }

  return (
   <main>
    <Header />
    <section className={styles.content}>
      <div className={styles.taskInfoContainer}>
        <Input 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button onClick={handleAddTask}>
          Criar
          <PlusCircle size={16} color="#f2f2f2" weight='bold' />
        </Button>
      </div>
      <div className={styles.tasksList}>
       <Empty /> 
      </div>
    </section>
   </main> 
  )
}