import { PencilLine } from 'phosphor-react';
import MuriAvatar from '../../assets/muri-avatar.png';
import styles from './Sidebar.module.css';

import { Avatar } from '../Avatar/Avatar';

const backgroundIMG = 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img
            className={styles.cover}
            src={backgroundIMG}
            alt=''
        />

        <div className={styles.profile}>
        <Avatar hasBorder src={MuriAvatar}/>

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