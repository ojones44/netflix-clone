function Hero() {
	return (
		<div className='hero'>
			<h2 className='heading'>Unlimited films, TV programmes and more.</h2>
			<p>Watch anywhere. Cancel at any time.</p>
			<p>
				Ready to watch? Enter your email to create or restart your membership
			</p>
			<div className='signup'>
				<input type='email' placeholder='Email address' />
				<button className='btn-lg'>Get started {'>'}</button>
			</div>
		</div>
	);
}

export default Hero;
