
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'

import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {
          projects.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))
        }
      </div>
    </section>
  )
}

export default Projects