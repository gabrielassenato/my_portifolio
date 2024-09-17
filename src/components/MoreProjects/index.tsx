import { MoreProjectsContainer } from './styles'
import { Button } from '../../styles'

type MoreProjectsProps = {
  items: {
    name: string
    img: string
    description: string
    linkToRepo: string
    linkVisit: string
  }[]
}

export const MoreProjects: React.FC<MoreProjectsProps> = ({ items }) => {
  return (
    <MoreProjectsContainer>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <div className="image-container">
              <img src={item.img} alt={item.name} />
              <div className="overlay">{item.description}</div>
            </div>
            <div>
              <a href={item.linkVisit} target="_blank" rel="noreferrer">
                <Button>Acessar</Button>
              </a>
              <a href={item.linkToRepo} target="_blank" rel="noreferrer">
                <Button>Repositório</Button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </MoreProjectsContainer>
  )
}
