import mockup from '../../assets/mockup.png'
import reactLogo from '../../assets/logo_react.png'
import nodeLogo from '../../assets/logo_nodejs.png'
import githubLogo from '../../assets/logo_github_white.png'
import vercelLogo from '../../assets/logo_vercel_white.png'
import seeMore from '../../assets/add.png'
import {
  AboutProject,
  MyProjectsContainer,
  MyProjectsProjects,
  Tecnology,
  VisitTheProject
} from './styles'
import { Button } from '../../styles'

export const MyProjects = () => (
  <MyProjectsContainer>
    <h1>Projetos</h1>
    <MyProjectsProjects>
      <img src={mockup} alt="" />
      <AboutProject>
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          quos? Cum asperiores fugiat quisquam, qui dolor nulla! Tenetur non
          unde eaque perferendis esse excepturi necessitatibus itaque aliquid
          ex? Eius, iusto.
        </p>
        <Tecnology>
          Tecnologias:
          <img src={reactLogo} alt="" />
          <img src={nodeLogo} alt="" />
        </Tecnology>
        <VisitTheProject>
          <h5>Visite o projeto:</h5>
          <div>
            <Button>
              Repositório <img src={githubLogo} alt="" />
            </Button>
            <Button>
              Ver projeto <img src={vercelLogo} alt="" />
            </Button>
          </div>
        </VisitTheProject>
      </AboutProject>
    </MyProjectsProjects>
    <Button>
      Ver mais projetos <img src={seeMore} alt="" />
    </Button>
  </MyProjectsContainer>
)
