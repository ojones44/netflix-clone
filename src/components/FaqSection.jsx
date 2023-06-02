import faqData from '../data/faqData';
import { useRef } from 'react';
import CrossIcon from '../assets/SVGS';

function FaqCard({ faq }) {
	const answerRef = useRef();

	function handleClick(e) {
		e.currentTarget.classList.toggle('active');
		answerRef.current.classList.toggle('answer-display');
		answerRef.current.classList.toggle('answer');
	}

	return (
		<div className='container'>
			<div className='question' onClick={handleClick}>
				<p>{faq.question}</p>
				<CrossIcon />
			</div>
			<div>
				<p ref={answerRef} className='answer'>
					{faq.answer}
				</p>
			</div>
		</div>
	);
}

function FaqSection() {
	return (
		<>
			<h2 className='heading faq-heading container'>
				Frequently Asked Questions
			</h2>
			{faqData.map((faq, i) => {
				return <FaqCard key={i} faq={faq} />;
			})}

			<div className='faq-signup container'>
				<p>
					Ready to watch? Enter your email to create or restart your membership
				</p>
				<div className='signup'>
					<input type='email' placeholder='Email address' />
					<button className='btn-lg'>Get started {'>'}</button>
				</div>
			</div>
		</>
	);
}

export default FaqSection;
