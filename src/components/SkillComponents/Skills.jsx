import styled from 'styled-components'
import GitHubStatus from '../../Assets/github_status.png'
import {
	BsFillLightningChargeFill,
} from '../Icon'
import { SkillsCard } from './SkillsCard'


const descriptionText = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod ipsum pharetra ante sodales faucibus.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod ipsum pharetra ante sodales faucibus.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod ipsum pharetra ante sodales faucibus.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod ipsum pharetra ante sodales faucibus.'
]


const Icon = styled.div`
		margin: 0 1em;
`

const PositionIcon = styled.div`
		display: flex;
		margin: 1.4em 0.2em;
`

export const MapDescription = () => {
	return descriptionText.map((descriptions, index) => (
		<PositionIcon key={index}>
				<Icon>
					<BsFillLightningChargeFill />
				</Icon>
				<p>{descriptions}</p>
			</PositionIcon>
	))
}

export const ImgGitHub = () => {
	return(
	<div>
		<img src={GitHubStatus} alt='github'/>
	</div>)
}

const Headers = styled.h2`
	font-size: 2.2rem;
	color: #176B87;
`


const SkillsTitle = (props) => {
	return(
			<Headers>
				{props.Skills}
			</Headers>
	
	)
}

const FlexRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`

const FlexColumn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export default function Skills() {
	return (
		<>
			<FlexColumn>
				<SkillsTitle Skills="Skills" />
				<MapDescription />
				<ImgGitHub />
				
			</FlexColumn>
			<FlexRow>
				<SkillsCard />
			</FlexRow>
		</>
		)
}
