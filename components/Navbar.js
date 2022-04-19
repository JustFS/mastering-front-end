import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/about">A propos</Link>
        </li>
        <li>
          <Link href="/apipage">API</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
