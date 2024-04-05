import { ProjectDescription } from "./ProjectDescription"
import { ProjecTitle } from "./ProjectDescription"
import { ProjectImage } from './ProjectImage'
import { ProjectIcon } from "./ProjectIcon"
import styled from 'styled-components'

const Headers = styled.h2`
	font-size: 2.2rem;
	color: #176B87;
`

const ProjectHeaders = (props) => {
	return(
			<Headers>
				{props.Skills}
			</Headers>
	
	)
}


export default function Project() {
	return (
		<>
		<div>
			<ProjectHeaders Skills="Skills" />
			<ProjecTitle />
			<ProjectDescription />
			<ProjectImage />
			<ProjectIcon />
		</div>
		</>
	)
}
