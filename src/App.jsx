import { Header } from './components/Header/Header.jsx';
import { Sidebar } from './components/Sidebar/Sidebar.jsx';
import { Post } from "./components/Post/Post";

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            <Post 
              author="Murilo Cristiano" 
              content="Post de exemplo Post de exemplo Post de exemplo Post de exemplo Post de exemplo Post de exemplo Post de exemplo "
            />
          </main>
      </div>
      
    </div>
  )
}
