
import styles from './App.module.css'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Nabvar from './components/Navbar/Nabvar'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div className={styles.App}>
      <Nabvar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
