import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar src='https://github.com/muricristiano.png'/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>Murilo Cristiano</strong>
                            <time title="30 de Junho de 2023, ás 9hs" dateTime="2023-06-30 9:00:00">
                                 Commented 1h ago
                            </time>
                        </div>

                        <button title='Delete comment'>
                            <Trash size={24}/>
                        </button>

                    </header>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, distinctio!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/> Like <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}