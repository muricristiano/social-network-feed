import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';
const img1 = 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50'
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover} 
            src={img1} 
            alt=''
        />

        <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/muricristiano.png"/>

            <strong>Murilo Cristiano</strong>
            <span>JavaScript Developer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={15} weight='light' />
                Edit profile
            </a>
        </footer>
    </aside>
  );
}