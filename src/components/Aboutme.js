import React from 'react'
import picture from '../img/zdj_portfolio_2.jpg'
import '../style/_aboutme.scss'
import { Link, animateScroll as scroll } from 'react-scroll'
import '../style/reset.scss'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'
import { HiLightningBolt } from 'react-icons/hi'

export default function Aboutme() {
	return (
		<div className='wrapper about-me'>
			<h1 id='Aboutme'>About me</h1>
			<div className='wrapper about-me__card'>
				<div className='about-me__social-foto'>
					<div className='about-me__camera'>
						<div className='about-me__light-lamp'></div>
					</div>
					<img src={picture} className='about-me__foto' />
					<div className='about-me__social-icons'>
						<div>
							<a href='https://github.com/Kry765' target='_blank' className='about-me__social-icon'>
								<AiFillGithub />
							</a>
						</div>
						<div>
							<a href='mailto: krzysztofkleka91@gmail.com' className='about-me__social-icon'>
								<MdOutlineMail />
							</a>
						</div>
						<div>
							<a
								href='https://www.linkedin.com/in/krzysztof-klęka-a75729225/'
								target='_blank'
								className='about-me__social-icon'
							>
								<FaLinkedin />
							</a>
						</div>
					</div>
					{/* <div>
						<Link to='Contact' smooth={true} offset={-70} duration={500}>
							<button className='about-me__btn'>Send Me</button>
						</Link>
					</div> */}
				</div>
				<div className='about-me__text'>
					<div className='about-me__text-paragraph'>
						<HiLightningBolt className='about-me__list-style' />
						<p>My name is Christopher</p>
					</div>
					<div className='about-me__text-paragraph'>
						<HiLightningBolt className='about-me__list-style' />
						<p>I'm 23 years old</p>
					</div>
					<div className='about-me__text-paragraph'>
						<HiLightningBolt className='about-me__list-style' />
						<p>I studying computer science</p>
					</div>
					<div className='about-me__text-paragraph'>
						<HiLightningBolt className='about-me__list-style' />
						<p>Now i am on the 3 years learn WebDeveloper.</p>
					</div>
					<div className='about-me__text-paragraph'>
						<HiLightningBolt className='about-me__list-style' />
						<p>My dream is work as professional Web-Developer</p>
					</div>
					<div className='about-me__square1'></div>
					<div className='about-me__square2'></div>
					<div className='about-me__square3'></div>
				</div>
			</div>
		</div>
	)
}
