import profile from '../../../assets/profile.jpg'
import './About.css'

const About = () => {
  return (
    <main className='about'>
      <h1 className="kanit-extralight title">WEB PROGRAMER</h1>
      <article className='about-article'>
        <img src={profile} alt="perfil de saalcazar" className='about-img' />
        <div className='about-description'>
          <div className='center'>
            <h2 className='title kanit-light'>Un poco sobre mí</h2>
            <p className='kanit-thin about-p'>Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca.</p>
            <p className='kanit-light about-lema title'>Lo puedes imaginar, lo puedo programar</p>
          </div>
        </div>
      </article>
    </main>
  )
}

export default About