import react from '../../../../assets/react.svg'
import go from '../../../../assets/go.svg'

const Card = ({title, url, img, github, languages}) => {
  return (
    <>
      <h3 className="kanit-thin card-title">{title}</h3>
      <img src={img} alt={title} className="card-img" />
      <a href={url} className="card-link">ceadl.org</a>
      <a href={github} className="card-github">Github</a>
      <ul className="card-languages">
        {
          languages.map((language, index) => (
            <li key={index} className="card-language">
              <img src={language == 'react' ? react : go} alt={language} />
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Card