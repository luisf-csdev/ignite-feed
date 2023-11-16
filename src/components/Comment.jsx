import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/105379183?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luís Felipe</strong>
                            <time
                                title='Nov 16th at 12:09'
                                dateTime="2023-11-16 12:09:30">
                                About 1h ago
                            </time>
                        </div>

                        <button title='Delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Very good Luís, congrats!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaude <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}