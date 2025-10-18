import Link from "next/link";

import s from "./header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <span className={s.logo}>NextJS</span>
      <nav className={s.nav}>
        <Link className={s.link} href="/">
          Home
        </Link>
        <Link className={s.link} href="/about">
          About
        </Link>
        <Link className={s.link} href="/products">
          Products
        </Link>
        <Link className={s.link} href="/users">
          Users
        </Link>
        <Link className={s.link} href="/contact">
          Contact
        </Link>
        <Link className={s.link} href="/shop">
          Shop
        </Link>
        <Link className={s.link} href="/notes">
          Notes
        </Link>
      </nav>
    </header>
  );
};

// export function Header2 () {}
