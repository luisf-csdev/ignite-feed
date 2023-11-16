import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/105379183?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Luís Felipe</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time
                    title='Nov 16th at 12:09'
                    dateTime="2023-11-16 12:09:30">
                    Published 1h ago
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>
        </article>
    )
}