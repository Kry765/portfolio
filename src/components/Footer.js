import '../style/reset.scss'
import '../style/_footer.scss'
import { Link } from 'react-scroll'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'

export default function Footer() {
	return (
		<div className='wrapper footer'>
			<div className='wrapper footer__socialmedia-items'>
				<div>
					<a href='https://www.linkedin.com/in/krzysztof-kl%C4%99ka-a75729225/' target='_blank' className='footer__socialmedia-item'>
						<FaLinkedin />
					</a>
				</div>
				<div className='wrapper'>
					<a href='https://github.com/Kry765' target='_blank' className='footer__socialmedia-item'>
						<AiFillGithub />
					</a>
				</div>
				<div className='wrapper'>
					<a href='mailto: krzysztofkleka91@gmail.com' className='footer__socialmedia-item' target='_blank'>
						<MdOutlineMail />
					</a>
				</div>
			</div>
			{/* <div>
				<nav className='wrapper footer__bottom-menu-items'>
					<a href='#' className='footer__bottom-menu-item'>
						Home
					</a>
					<a href='Aboutme' className='footer__bottom-menu-item'>
						About Me
					</a>
					<a href='Skills' className='footer__bottom-menu-item'>
						Skills
					</a>
					<Link to='Certyfication' className='footer__bottom-menu-item'>
						Certyfication
					</Link>
					<Link to='Contact' smooth={true} offset={-70} duration={500} className='footer__bottom-menu-item'>
						<>Contact me</>
					</Link>
				</nav>
			</div> */}
			<div className='footer__copywrite'>
				<p>Kry765 | &copy; All right reserved 2023</p>
			</div>
		</div>
	)
}
