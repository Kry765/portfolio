import Myphoto from '../img/myphoto.jpg'
import { BsFillLightningChargeFill } from '../components/Icon'


function About() {
	const descriptions = [
		"I am currently in my third year of studies at the University of Information Technology and Management, majoring in Web-Developer.",
		"The knowledge I have acquired allows me to create websites which become a business card of every company.",
		"I am open to learning the latest technologies so that I can develop my passion"
	];



const renderAboutDescriptions = () => {
		return descriptions.map((description, index) => (
			<div key={index} className='space-icon-description'>
				<span>
                    <BsFillLightningChargeFill className='icon-text' />
                </span>
                <div>
                    <p>{description}</p>
                </div>
			</div>
		))
}

	return (
		<div className='about'>
			<div className='flex about__about-box'>
				<div className='flex justify-center align-center '>
					<img src={Myphoto} alt='author photo' className='about__author-photo' />
				</div>
				<div className='flex flex-column align-center about__description'>
					<h2 className='title-center'>About me</h2>
					{renderAboutDescriptions()}
				</div>
			</div>
		</div>
	)
}


export default About;