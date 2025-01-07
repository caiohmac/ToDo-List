import styles from './App.module.css'

import { Header } from './components/Header'
import { Empty } from './components/list/Empty'

export function App() {

  return (
   <main>
    <Header />
    <Empty />
   </main> 
    
  )
}