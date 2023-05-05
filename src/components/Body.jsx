import bodyContent from '../data/bodyContent';

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

export default Body;
