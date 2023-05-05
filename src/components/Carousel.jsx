import { useState } from 'react';
import { useEffect } from 'react';

function Carousel() {
	const [shows, setShows] = useState([{ title: 'Loading...', image: '' }]);
	const [isDown, setIsDown] = useState(false);
	const [startX, setStartX] = useState();
	const [scrollLeft, setScrollLeft] = useState();

	useEffect(() => {
		fetch('../../src/data/tvShows.json')
			.then((res) => res.json())
			.then((data) => {
				setShows(data);
			})
			.catch((err) => console.log(err));
	}, []);

	function mouseDown(e) {
		e.preventDefault();
		setIsDown(true);
		const slider = e.currentTarget;
		slider.classList.add('dragging');
		setStartX(e.pageX - slider.offsetLeft);
		setScrollLeft(slider.scrollLeft);
	}

	function mouseUp(e) {
		e.preventDefault();
		setIsDown(false);
		e.currentTarget.classList.remove('dragging');
	}

	function mouseMove(e) {
		if (!isDown) return;
		e.preventDefault();
		const slider = e.currentTarget;
		const x = e.pageX - slider.offsetLeft;
		console.log(x, startX);
		const walk = (x - startX) * 2.5;
		slider.scrollLeft = scrollLeft - walk;
	}

	return (
		<>
			<h2 className='heading faq-heading'>Our Favourite Picks</h2>
			<div
				className='carousel'
				onMouseDown={mouseDown}
				onMouseUp={mouseUp}
				onMouseLeave={mouseUp}
				onMouseMove={mouseMove}
			>
				{shows.map((show, i) => {
					return (
						<img
							className='card'
							onMouseDown={mouseDown}
							onMouseUp={mouseUp}
							src={show.image}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Carousel;
