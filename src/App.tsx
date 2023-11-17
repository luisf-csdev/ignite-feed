import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luisf-csdev.png',
      name: 'Luís Felipe',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hello folks 👋' },
      {
        type: 'paragraph',
        content:
          'Just uploaded another project on my portfolio. It is a project that I have made on Ignite path of Rocketseat. The name of the project is Ignite Feed 🚀',
      },
      {
        type: 'link',
        content: 'luisf-csdev/ignite-feed',
        url: 'https://github.com/luisf-csdev/ignite-feed',
      },
    ],
    publishedAt: new Date('2023-11-16 14:23:54'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/erik-san.png',
      name: 'Erik Anthonny',
      role: 'IT Student',
    },
    content: [
      { type: 'paragraph', content: 'Hi everyone 👋' },
      { type: 'paragraph', content: 'I hope you all are having a nice day!' },
    ],
    publishedAt: new Date('2023-11-16 15:19:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
