import { HandsClapping, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react';

import MuriAvatar from '../../assets/muri-avatar.png'

interface CommentProps{
    content: string;
    onClickDeleteComment: (comment: string) => void;
}

export function Comment({content, onClickDeleteComment}: CommentProps){
    const [applauseCount, setApplauseCount] = useState(0);
    
    function handleDeleteComment(){
        onClickDeleteComment(content);
    }

    function handleApplauseComment(){
        setApplauseCount((state) => {return state + 1});
    }

    return (
        <div className={styles.comment}>
            <Avatar src={MuriAvatar} title={'Avatar img'} alt={''} onClick={() => alert("Arrow function triggered!")} />

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
                    <p>{content}</p>
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