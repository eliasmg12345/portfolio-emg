import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Elias</h1>
                <p className={styles.description}>I'm a full-stack developer with 5 year experience unig React</p>
                <a className={styles.contactBtn} href="vozofGod@gmail.com">Contact Me</a>
            </div>
            <img
                className={styles.heroImg}
                src={getImageUrl('hero/heroImage.png')}
                alt="Hero" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />

        </section>
    )
}

export default Hero