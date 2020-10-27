import Link from "next/link";

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        background: #333;
      }
    `}</style>
  </div>
);

export default Navbar;
