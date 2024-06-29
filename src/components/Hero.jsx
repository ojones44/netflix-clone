import { HeroWrapper } from "../wrappers/Hero";
import Signup from "./Signup";

function Hero() {
  return (
    <HeroWrapper>
      <h2 className="heading">Unlimited films, TV programmes and more.</h2>
      <p>Watch anywhere. Cancel at any time.</p>
      <p>
        Ready to watch? Enter your email to create or restart your membership
      </p>
      <Signup />
    </HeroWrapper>
  );
}

export default Hero;
