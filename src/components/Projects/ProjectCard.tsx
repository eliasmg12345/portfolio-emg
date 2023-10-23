import { getImageUrl } from "../../utils"

import styles from './ProjectCard.module.css'

const ProjectCard = ({ p: { title, imageSrc, description, skills, demo, source } }: any) => {
    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((s: [], i: number) => (
                    <li key={i} className={styles.skill}>{s}</li>
                ))}
            </ul>
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
        </div>
    )
}

export default ProjectCard