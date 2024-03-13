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
	FaGithub,
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
					<p>HTML</p>
					<div className='skills__progress-bar'></div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaCss3Alt className='skills__skill-img' />
					</div>
					<p>CSS</p>
					<div className='skills__progress-bar'></div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaSass className='skills__skill-img' />
					</div>
					<p>SCSS</p>
					<div className='skills__progress-bar'></div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<SiJavascript className='skills__skill-img' />
					</div>
					<p>JavaScript</p>
					<div className='skills__progress-bar'></div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaReact className='skills__skill-img' />
					</div>
					<p>React</p>
					<div className='skills__progress-bar'></div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<SiMysql className='skills__skill-img' />
					</div>
					<p>MySQL</p>
					<div className='skills__progress-bar'></div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<SiBem className='skills__skill-img' />
					</div>
					<p>BEM</p>
					<div className='skills__progress-bar'></div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaDocker className='skills__skill-img' />
					</div>
					<p>Docker</p>
					<div className='skills__progress-bar'></div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<SiSequelize className='skills__skill-img' />
					</div>
					<p>Sequelize</p>
					<div className='skills__progress-bar'></div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaNode className='skills__skill-img' />
					</div>
					<p>Node.js</p>
					<div className='skills__progress-bar'></div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaPhp className='skills__skill-img' />
					</div>
					<p>PHP</p>
					<div className='skills__progress-bar'></div>
				</div>
				<div className='skills__skill-card'>
					<div>
						<FaGithub className='skills__skill-img' />
					</div>
					<p>GitHub</p>
					<div className='skills__progress-bar'></div>
				</div>
			</div>
		</div>
	)
}
