import { HandsClapping, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react';

export function Comment(props){
    const [applauseCount, setApplauseCount] = useState(0);
    
    function handleDeleteComment(){
        props.onClickDeleteComment(props.content);
    }

    function handleApplauseComment(){
        setApplauseCount(applauseCount + 1);
    }

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

                        <button onClick={handleDeleteComment} title='Delete comment'>
                            <Trash size={24}/>
                        </button>

                    </header>
                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={handleApplauseComment}>
                        <HandsClapping size={24}/> Applause <span>{applauseCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}