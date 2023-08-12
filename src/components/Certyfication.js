import '../style/_certyfication.scss'
import Udemy1 from '../img/cert_cz1.jpg'
import Udemy2 from '../img/cert_cz.2.jpg'

export default function Certyfication() {
	return (
		<div>
			<h1>Certyfication</h1>
			<img src={Udemy1} className='certyfication__img-diploma' alt='certyfication' />
			<img src={Udemy1} className='certyfication__img-diploma' alt='certyfication' />
			<img src={Udemy2} className='certyfication__img-diploma' />
		</div>
	)
}
