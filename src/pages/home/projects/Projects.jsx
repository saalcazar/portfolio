import Card from "./card/Card"
import ceadl from '../../../assets/ceadl.png'

const projects = [
  {
    title: 'Página web CEADL',
    url: 'https://ceadl.org.bo',
    img: ceadl,
    github: 'https://github.com/saalcazar/ceadl.git',
    description: 'Esta es la web del una ONG',
    languages: ['react', 'go', 'postgres']
  },
]

const Projects = () => {
  return (
    <main className="main-projects">
      <h2 className="title kanit-light">Proyectos</h2>
      <section className="projects">
        {
          projects.map((project, index) => (
            <aside key={index}>
              <Card
                title={project.title}
                url={project.url}
                img={project.img}
                github={project.github}
                languages={project.languages}
              />
            </aside>
          ))
        }
      </section>
    </main>
  )
}

export default Projects