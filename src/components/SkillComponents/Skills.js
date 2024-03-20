import GitHubStatus from '../../img/github_status.png'
import {
	BsFillLightningChargeFill,
	// FaHtml5,
	// FaCss3Alt,
	// FaSass,
	// FaReact,
	// SiJavascript,
	// SiMysql,
	// SiBem,
	// FaDocker,
	// SiSequelize,
	// FaNode,
	// FaPhp,
	// FaGithub,
} from '../Icon'
import { SkillsCard } from './SkillsCard'

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
				<SkillsCard />
			</div>
		</div>
	)
}
