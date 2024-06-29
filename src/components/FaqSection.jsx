import faqData from "../data/faqData";
import { useRef } from "react";
import CrossIcon from "../assets/SVGS";
import { FaqSectionWrapper, FaqCardWrapper } from "../wrappers/FaqSection";
import Signup from "./Signup";

function FaqCard({ faq }) {
  const answerRef = useRef();

  function handleClick(e) {
    e.currentTarget.classList.toggle("active");
    answerRef.current.classList.toggle("answer-display");
    answerRef.current.classList.toggle("answer");
  }

  return (
    <FaqCardWrapper className="container">
      <div className="question" onClick={handleClick}>
        <p>{faq.question}</p>
        <CrossIcon />
      </div>
      <div>
        <p ref={answerRef} className="answer">
          {faq.answer}
        </p>
      </div>
    </FaqCardWrapper>
  );
}

function FaqSection() {
  return (
    <FaqSectionWrapper>
      <h2 className="heading faq-heading container">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, i) => {
        return <FaqCard key={i} faq={faq} />;
      })}

      <div className="faq-signup container">
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <Signup />
      </div>
    </FaqSectionWrapper>
  );
}

export default FaqSection;
