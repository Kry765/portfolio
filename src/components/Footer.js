import '../style/reset.scss'
import '../style/_footer.scss'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'

export default function Footer() {
	return (
		<div className='wrapper footer'>
			<div className='wrapper footer__socialmedia-items'>
				<div>
					<a href='https://www.linkedin.com/in/krzysztof-kl%C4%99ka-a75729225/' className='footer__socialmedia-item'>
						<FaLinkedin />
					</a>
				</div>
				<div className='wrapper'>
					<a href='https://github.com/Kry765' className='footer__socialmedia-item'>
						<AiFillGithub />
					</a>
				</div>
				<div className='wrapper'>
					<a href='mailto: krzysztofkleka91@gmail.com' className='footer__socialmedia-item'>
						<MdOutlineMail />
					</a>
				</div>
			</div>
			<div className='footer__copywrite'>
				<p>Kry765 | &copy; All right reserved 2023</p>
			</div>
		</div>
	)
}
