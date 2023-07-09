import { format, formatDistance, formatDistanceToNow } from 'date-fns'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar';
import styles from './Post.module.css'

export function Post(props){
    const publishedDateFormatted = format(props.publishedAt, "HH:mm'hs 'd'-'LLLL'")

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {addSuffix: true})

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
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong> Give your feedback </strong>
                <textarea placeholder='Leave your comment'/>
                <footer>
                    <button type="submit"> Send </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}