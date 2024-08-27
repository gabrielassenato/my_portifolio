import { MoreProjectsContainer } from './styles'
import { Button } from '../../styles'

type MoreProjectsProps = {
  items: {
    name: string
    img: string
    imgTecnology?: string[]
  }[]
}

export const MoreProjects: React.FC<MoreProjectsProps> = ({ items }) => {
  return (
    <MoreProjectsContainer>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <div>
              <Button>Acessar</Button>
              <Button>Repositório</Button>
            </div>
          </li>
        ))}
      </ul>
    </MoreProjectsContainer>
  )
}
