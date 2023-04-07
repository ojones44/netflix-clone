import bodyContent from './data/bodyContent';
import faqSection from './data/faqSection';
import links from './data/links';

function Navbar() {
	return (
		<nav className='navbar container'>
			<h1 className='logo'>FLETNIX</h1>
			<button>Sign in.</button>
		</nav>
	);
}

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

function Body() {
	return bodyContent.map((card) => {
		return (
			<div className='feature-card'>
				<div className='container'>
					<div className='text'>
						<h2 className='heading'>{card.heading}</h2>
						<p>{card.content}</p>
					</div>
					<img src={card.image} alt='card-img' />
				</div>
			</div>
		);
	});
}

function FaqSection() {
	return (
		<>
			<h2 className='heading'>Frequently Asked Questions</h2>
			{faqSection.map((faq) => {
				return (
					<>
						<div className='question'>
							<p>{faq.question}</p>
							<p>+</p>
						</div>
						<div className='active'>
							<p className='answer'>{faq.answer}</p>
						</div>
					</>
				);
			})}
			;
			<p>
				Ready to watch? Enter your email to create or restart your membership
			</p>
			<input type='email' placeholder='Email address' />
			<button className='btn-lg'>Get started {'>'}</button>
		</>
	);
}

function Footer() {
	return (
		<footer>
			<p>
				Question? Call <a href=''>0808 196 5391</a>
			</p>
			<ul className='links'>
				{links.map((link) => {
					return (
						<li>
							<a href={link.href}>{link.name}</a>
						</li>
					);
				})}
			</ul>
			<select name='languages' id='languages'>
				<option value='English'>English</option>
			</select>
			<p>Fletnix United Kingdom</p>
		</footer>
	);
}

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<Body />
			<FaqSection />
			<Footer />
		</div>
	);
}

export default App;
