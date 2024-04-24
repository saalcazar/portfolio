import githubImg from '../../../../assets/github.svg'
import linkImg from '../../../../assets/link.svg'

const Card = ({title, url, img, github, description, languages}) => {
  return (
    <>
      <h3 className="kanit-extralight card-title">{title}</h3>
      <img src={img} alt={title} className="card-img" />
      <p className='card-description kanit-thin'>{description}</p>
      <div className='card-group'>
        <div className='card-links'>
          <h4 className='kanit-extralight title-links'>Enlaces</h4>
          <a href={url} className="card-link">
            <img src={linkImg} alt="" className='card-svg' />
          </a>
          <a href={github} className="card-link">
            <img src={githubImg} alt="" className='card-svg' />
          </a>
        </div>
        <ul className="card-languages">
          <h4 className='kanit-extralight title-language'>Lenguajes</h4>
          {
            languages.map((language, index) => (
              <li key={index} className="card-language">
                <img src={language} alt={language} className='card-svg' />
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Card