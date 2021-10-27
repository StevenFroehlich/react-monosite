import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Case #1</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Case #2</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Case #3</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
