import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Luís Felipe" content="This is a cool post" />
          <Post author="Vivian Grace" content="Hi there!" />
        </main>

      </div>
    </div>

  )
}
