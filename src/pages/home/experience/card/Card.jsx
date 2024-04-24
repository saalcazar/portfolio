import link from '../../../../assets/link.svg'
const Card = ({key, company, position, description, start, end, web}) => {
  return (
    <article key={key} className="experience-card">
      <h3 className="kanit-light card-title">{position}</h3>
      <p className="experience-card-title kanit-extralight">{company}</p>
      <p className="kanit-thin">{description}</p>
      <section className="experience-data">
        <p className="kanit-thin experience-d">{start}</p>
        <p className="kanit-thin experience-d">{end}</p>
        <a className="kanit-thin experience-d" href={web} ><img src={link} alt="" className='card-svg' /></a>
      </section>
    </article>
  )
}

export default Card