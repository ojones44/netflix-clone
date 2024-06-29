import { NavBarWrapper } from "../wrappers/NavBar";
import ThemeSelector from "./ThemeSelector";

function Navbar({ setTheme }) {
  return (
    <NavBarWrapper>
      <h1>FLETNIX</h1>
      <div>
        <button>Sign in.</button>
        <ThemeSelector setTheme={setTheme} />
      </div>
    </NavBarWrapper>
  );
}

export default Navbar;
