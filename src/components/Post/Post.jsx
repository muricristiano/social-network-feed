import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar';

export function Post(props){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://github.com/muricristiano.png"/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>Web Developer</span>
                    </div>
                </div> 

                <time 
                    title="30 de Junho de 2023, ás 9hs" 
                    dateTime="2023-06-30 9:00:00"
                >
                    Published 1h ago
                </time>

            </header>

            <div className={styles.content}>
            <p>Hello guys 👋</p>
            <p>I've just uploaded another project to my portfolio. It's a project I built using React and Node. The project is called DoctorCare 🚀</p>
            <p><a href=''> github.com/example/doctorcare </a></p>
            <p>
            <a href=''> #newproject </a>
            <a href=''> #work </a>
            <a href=''> #network </a>
        </p>

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