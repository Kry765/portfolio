import styled from 'styled-components'
import LearnPgAppImage from '../../Assets/learnpg_project.jpg.png'
import { FaGithub } from '../Icon'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 80%;
	background-color: #D9D9D9;
	padding: 2em;
	margin: 3em;
	border-radius: 15px;

	@media (max-width: 992px){
		flex-direction: column-reverse;
		flex-wrap: wrap;
		justify-content: center;
	}
`

const FlexColumn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const FlexRow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`

const projects = [
	{
		title: 'LearnPgApp',
		stack: 'React, Express.js, Docker, Sequelize',
		description: 'Projects for WSIZ as part of engineering work. The web application includes basic topics in SQL databases, which the student can later test through a quiz. ',
		image: LearnPgAppImage,
		github: <FaGithub size={20} style={{ margin: '0 10px' }} />,
		
	},	
]

const ProjectTitle = styled.h1`
	font-size: 1.4rem;

`
const ProjectDescriptionContent = styled.div`
	display: flex;
	flex-direction: column;
`

const ProjectDescription = styled.p`
	font-size: 1.2rem;
`

const IconStyle = styled.div`
	display: flex;
	padding: 1em 0;
`

const Icon = ({github}) => {
	return <IconStyle>View GitHub{github}</IconStyle>
}

const ProjectStack = styled.div`
	color: #000;
	margin: 1em 0;
`

const ProjectImage = styled.img`
	max-width: 50%;
	max-heigth: auto;
	position: relative;
	}
`


export default function Project() {
	return projects.map((project, index) => (
			<Wrapper key={index}>
				<ProjectDescriptionContent>
					<ProjectTitle style={{ margin: '10px 0' }}>{project.title}</ProjectTitle>
					<ProjectStack>{project.stack}</ProjectStack>
					<ProjectDescription>{project.description}</ProjectDescription>
					<Icon github={project.github}/>
				</ProjectDescriptionContent>
				<FlexColumn>
					<ProjectImage src={project.image}/>
				</FlexColumn>
			</Wrapper>
		))}
