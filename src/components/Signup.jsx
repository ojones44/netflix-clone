import { SignupWrapper } from "../wrappers/Signup";

const Signup = () => {
  return (
    <SignupWrapper>
      <input type="email" placeholder="Email address" />
      <button className="btn-lg">Get started {">"}</button>
    </SignupWrapper>
  );
};

export default Signup;
