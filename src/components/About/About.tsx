import { getImageUrl } from "../../utils"
import styles from './About.module.css'

const About = () => {
    return (
        <section className={styles.container} id="about"> 
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl('about/aboutImage.png')}
                    alt="me sitting with a laptp"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/cursorIcon.png')}
                            alt="cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontede developer with experience in buildind responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>i have experience developing fast and optimised back-end  sities and Apis</p>
                        </div>

                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3> UI Designer</h3>
                            <p>I have designed  multiple laning and have  systemas as well</p>
                        </div>

                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About