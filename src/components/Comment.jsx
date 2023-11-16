import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/luisf-csdev.png" />

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