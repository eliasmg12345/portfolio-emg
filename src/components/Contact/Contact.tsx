import { getImageUrl } from "../../utils"

import styles from './Contact.module.css'

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                    <a href="email:vozofGod@gmail.com" target="_blank">vozofGod@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/elias-mollericona/" target="_blank">linkedin.com/eliasmg</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="GiHub Icon" />
                    <a href="https://github.com/eliasmg12345" target="_blank">github.com/eliasmg12345</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact