import styled from 'styled-components';
import Myphoto from '../../Assets/myphoto.jpg'
import { BsFillLightningChargeFill } from '../Icon'


function About() {
	const descriptions = [
		"I am currently in my third year of studies at the University of Information Technology and Management, majoring in Web-Developer.",
		"The knowledge I have acquired allows me to create websites which become a business card of every company.",
		"I am open to learning the latest technologies so that I can develop my passion"
	];

	
const AboutmeDescription = styled.div`
		max-width:50%;
		min-height: 100%;

	`
const AboutmeMyPhoto = styled.div`
		display: flex;
		justify-content: center;
		max-width: 50%;
		min-height: 100%;
		margin: 5em;
`

const MyPhoto = styled.img`
		width: 55%;
`

const Icon = styled.div`
		margin: 0 1em;
`

const FlexRow = styled.div`
		overflow: hidden;
		position: relative;	
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
`

const PositionIcon = styled.div`
		display: flex;
		margin: 1.4em 0.2em;
`

const RadiusBottom = styled.div`
    	border-radius: 50%;
    	position: absolute;
    	background-color: #176B87;
    	bottom: -25%;
    	left: 5%;
    	width: 400px;
    	height: 400px;
    	z-index: -1;
`

const RadiusTop = styled.div`
    	border-radius: 50%;
    	position: absolute;
    	background-color: #D9D9D9;
    	top: 0%;
    	right: 0%;
    	width: 400px;
    	height: 400px;
    	z-index: -1;
`

const renderAboutDescriptions = () => {
		return descriptions.map((description, index) => (
			<PositionIcon key={index}>
				<Icon>
					<BsFillLightningChargeFill />
				</Icon>
				<p>{description}</p>
			</PositionIcon>
		))
}

	return (
		<div>
			<FlexRow>
				<RadiusTop />
				<AboutmeMyPhoto>
					<MyPhoto src={Myphoto} alt="my photo"/>
				</AboutmeMyPhoto>
				<AboutmeDescription>
						{renderAboutDescriptions()}
				</AboutmeDescription>
				<RadiusBottom />
			</FlexRow>
		</div>
	)
}


export default About;