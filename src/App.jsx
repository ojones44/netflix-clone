import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Body from './components/Body';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<Body />
			<Carousel />
			<FaqSection />
			<Footer />
		</div>
	);
}

export default App;
