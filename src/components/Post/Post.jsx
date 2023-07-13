import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'
import styles from './Post.module.css'

import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar';

export function Post(props){
    const [commentsArray, setCommentsArray] = useState([])
    const [newCommentText, setNewCommentText] = useState(''); // Mirroring Text Area Value

    const publishedDateFormatted = format(props.publishedAt, "HH:mm'hs 'd'-'LLLL'")
    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {addSuffix: true})

    function handleNewCommentChange(){
        event.target.setCustomValidity('') //  Validation trigger is prevented
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment(){
        event.preventDefault()
        setCommentsArray([...commentsArray, newCommentText]);
        setNewCommentText('');
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = commentsArray.filter(comment => {
            return comment !== commentToDelete;
        })
        setCommentsArray(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('You must type a comment')
    }

    const isNewCommentTextEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={props.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div> 

                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>

            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> Give your feedback </strong>
                <textarea 
                    placeholder='Leave your comment'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button 
                        type="submit"
                        disabled={isNewCommentTextEmpty}
                    > Send 
                    </button>
                </footer>
            </form>
 
            <div className={styles.commentList}>
                {commentsArray.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onClickDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>

        </article>
    )
}