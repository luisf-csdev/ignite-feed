import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [aplaudeCount, setAplaudeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleAplaudeComment() {
    setAplaudeCount((aplaude) => {
      return aplaude + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/luisf-csdev.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luís Felipe</strong>
              <time title="Nov 16th at 12:09" dateTime="2023-11-16 12:09:30">
                About 1h ago
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleAplaudeComment}>
            <ThumbsUp />
            Aplaude <span>{aplaudeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
