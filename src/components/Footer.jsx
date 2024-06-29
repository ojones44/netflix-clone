import links from "../data/links";
import { FooterWrapper } from "../wrappers/Footer";

function Footer() {
  return (
    <FooterWrapper className="container">
      <p className="contact">
        Question? Call <a href="">0808 196 5391</a>
      </p>
      <ul>
        {links.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.href}>{link.name}</a>
            </li>
          );
        })}
      </ul>
      <select name="languages" id="languages">
        <option value="English">&#127760;&#xfe0e; English</option>
      </select>
      <p>Fletnix United Kingdom</p>
    </FooterWrapper>
  );
}

export default Footer;
