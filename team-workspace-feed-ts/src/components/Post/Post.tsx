import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'
import styles from './Post.module.css'

import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar';

interface PostProps {
    post: PostType;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface Author {
        name: string;
        role: string;
        avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export function Post({ post }: PostProps){
    const [commentsArray, setCommentsArray] = useState(Array<string>)

    const [newCommentText, setNewCommentText] = useState(''); // Mirroring Text Area Value

    const publishedDateFormatted = format(post.publishedAt, "HH:mm'hs 'd'-'LLLL'")
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {addSuffix: true})

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()

        setCommentsArray([...commentsArray, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('') //  Validation trigger is prevented
        setNewCommentText(event.target.value)
    }
 
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('You must type a comment')
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = commentsArray.filter(comment => {
            return comment !== commentToDelete;
        })
        setCommentsArray(commentsWithoutDeletedOne)
    }


    const isNewCommentTextEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div> 

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>

            </header>

            <div className={styles.content}>
                {post.content.map(line => {
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