import GitHubStatus from '../img/github_status.png'
import {
	BsFillLightningChargeFill,
	FaHtml5,
	FaCss3Alt,
	FaSass,
	FaReact,
	SiJavascript,
	SiMysql,
	SiBem,
	FaDocker,
	SiSequelize,
	FaNode,
	FaPhp,
} from '../components/Icon'

export default function Skills() {
	return (
		<div className='flex justify-center align-center flex-column skills'>
			<div>
				<h2 className='title-center'>Skills</h2>
				<div className='skills__text'>
					<div className='space-icon-description'>
						<span>
							<BsFillLightningChargeFill className='icon-text' />
						</span>

						<p>On a day-to-day basis, he works with Front-End technologies such as React and JavaScript. </p>
					</div>
					<div className='space-icon-description'>
						<span>
							<BsFillLightningChargeFill className='icon-text' />
						</span>

						<p>I run most of my projects on containers using Docker technology.</p>
					</div>
					<div className='space-icon-description'>
						<span>
							<BsFillLightningChargeFill className='icon-text' />
						</span>

						<p>Na ten moment jestem na etapie nauki języka backendowego PHP</p>
					</div>
				</div>
				<div className='flex justify-center'>
					<img src={GitHubStatus} alt='github progres' className='skills__github-img' />
				</div>
			</div>
			<div className='skills__stack-technology flex '>
				<div className='skills__skill-card'>
					<div>
						<FaHtml5 className='skills__skill-img' />
					</div>
					<div>HTML</div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaCss3Alt className='skills__skill-img' />
					</div>
					<div>CSS</div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaSass className='skills__skill-img' />
					</div>
					<div>SCSS</div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<SiJavascript className='skills__skill-img' />
					</div>
					<div>JavaScript</div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaReact className='skills__skill-img' />
					</div>
					<div>React</div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<SiMysql className='skills__skill-img' />
					</div>
					<div>MySQL</div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<SiBem className='skills__skill-img' />
					</div>
					<div>BEM</div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaDocker className='skills__skill-img' />
					</div>
					<div>Docker</div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<SiSequelize className='skills__skill-img' />
					</div>
					<div>Sequelize</div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaNode className='skills__skill-img' />
					</div>
					<div>Node.js</div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaPhp className='skills__skill-img' />
					</div>
					<div>PHP</div>
				</div>
			</div>
		</div>
	)
}
