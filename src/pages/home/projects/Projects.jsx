import Card from "./card/Card"
import ceadl from '../../../assets/ceadl.png'
import ceadlApp from '../../../assets/ceadlApp.png'
import ceadlAdmin from '../../../assets/ceadl-admin.png'
import react from '../../../assets/react.svg'
import go from '../../../assets/go.svg'
import postgres from '../../../assets/postgres.svg'
import './Projects.css'

const projects = [
  {
    title: 'Página web CEADL',
    url: 'https://ceadl.org.bo',
    img: ceadl,
    github: 'https://github.com/saalcazar/ceadl.git',
    description: 'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo.',
    languages: [react, go, postgres],
  },
  {
    title: 'App información CEADL',
    url: 'https://app.ceadl.org.bo',
    img: ceadlApp,
    github: 'https://github.com/saalcazar/ceadl.git',
    description: 'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo.',
    languages: [react, go, postgres],
  },
  {
    title: 'App información CEADL',
    url: 'https://admin.ceadl.org.bo',
    img: ceadlAdmin,
    github: 'https://github.com/saalcazar/ceadl.git',
    description: 'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo.',
    languages: [react, go, postgres],
  }
]

const Projects = () => {
  return (
    <main className="main-projects">
      <h2 className="title kanit-light title-projects">PROYECTOS</h2>
      <section className="projects">
        {
          projects.map((project, index) => (
            <aside className="card-projects" key={index}>
              <Card
                title={project.title}
                url={project.url}
                img={project.img}
                github={project.github}
                languages={project.languages}
                description={project.description}
              />
            </aside>
          ))
        }
      </section>
    </main>
  )
}

export default Projects