import Myphoto from '../img/myphoto.jpg'
import { BsFillLightningChargeFill } from '../components/Icon'

export default function About() {
	return (
		<div className='about'>
			<div className='flex about__about-box'>
				<div className='flex justify-center align-center '>
					<img src={Myphoto} alt='author photo' className='about__author-photo' />
				</div>
				<div className='flex flex-column align-center about__description'>
					<div>About me</div>
					<div>
						<div className='about__text'>
							<span className='about__icon-description'>
								<BsFillLightningChargeFill />
							</span>
							<div>
								I am currently in my third year of studies at the University of Information Technology and Management,
								majoring in Web-Developer.
							</div>
						</div>
						<p className='about__text'>
							<span className='about__icon-description'>
								<BsFillLightningChargeFill />
							</span>
							<div>
								The knowledge I have acquired allows me to create websites which become a business card of every
								company.
							</div>
						</p>
						<p className='about__text'>
							<span className='about__icon-description'>
								<BsFillLightningChargeFill />
							</span>
							<div>I am open to learning the latest technologies so that I can develop my passion</div>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
