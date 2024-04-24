import Card from './card/Card'
import './Experience.css'

const Experience = () => {
  const jobs = [
    {
      company: 'Centro de Estudios y Apoyo al Desarrollo Local',
      position: 'Encargado del área de TIC`s',
      description: 'Desarrollo de aplicaciones web, capacitación en temas de tecnología, administración de redes sociales',
      start: '11/05/2021',
      end: '11/06/2023',
      web: 'https://ceadl.org.bo'
    },
    {
      company: 'Centro de Estudios y Apoyo al Desarrollo Local',
      position: 'Encargado del área de TIC`s',
      description: 'Desarrollo de aplicaciones web, capacitación en temas de tecnología, administración de redes sociales',
      start: '11/05/2021',
      end: '11/06/2023',
      web: 'https://ceadl.org.bo'
    },
    {
      company: 'Centro de Estudios y Apoyo al Desarrollo Local',
      position: 'Encargado del área de TIC`s',
      description: 'Desarrollo de aplicaciones web, capacitación en temas de tecnología, administración de redes sociales',
      start: '11/05/2021',
      end: '11/06/2023',
      web: 'https://ceadl.org.bo'
    }
  ]
  return (
    <main>
      <h2 className="title title-projects kanit-light">EXPERIENCIA</h2>
      <section className="experience-cards">
        {
          jobs.map((job, index) => (
            <Card
              key={index}
              company={job.company}
              position={job.position}
              description={job.description}
              start={job.start}
              end={job.end}
              web={job.web}
            />
          ))
        }
      </section>
    </main>
  )
}

export default Experience