import { useState, useEffect } from 'react';
import { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

function Carousel() {
	const [slides, setSlides] = useState([{ title: 'Loading...', image: '' }]);
	const [loading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('/tvShows.json')
			.then((res) => res.json())
			.then((data) => {
				setSlides(data);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		!loading && (
			<section className='carousel'>
				<h2 className='heading faq-heading container'>Our Top Picks</h2>
				<Swiper
					grabCursor
					centeredSlides
					slidesPerView='auto'
					effect='coverflow'
					loop
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					modules={[EffectCoverflow]}
				>
					<div className='swiper-wrapper'>
						{slides.map((slide, i) => {
							return (
								<SwiperSlide
									key={i}
									style={{
										backgroundImage: `url(${slide.image})`,
									}}
								/>
							);
						})}
						;
					</div>
				</Swiper>
			</section>
		)
	);
}

export default Carousel;
