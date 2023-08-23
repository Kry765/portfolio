import '../style/_contact.scss'

function Contact() {
	return (
		<div className='wrapper contact' id='Contact'>
			<div>
				<h1>Contact me</h1>
			</div>
			<div></div>
			<div className='wrapper contact'>
				<input type='text' className='contact__input' placeholder='Wpisz swoje imie: ' />
				<input type='text' className='contact__input' placeholder='Wpisz swój adres email:' />
				<textarea className='contact__input' placeholder='Wpisz tu swoją wiadomość'></textarea>
			</div>
		</div>
	)
}

export default Contact
