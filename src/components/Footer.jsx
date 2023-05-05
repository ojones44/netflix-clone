import links from '../data/links';

function Footer() {
	return (
		<footer className='container'>
			<p className='contact'>
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
				<option value='English'>&#127760;&#xfe0e; English</option>
			</select>
			<p>Fletnix United Kingdom</p>
		</footer>
	);
}

export default Footer;
