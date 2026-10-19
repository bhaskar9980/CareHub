"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        <img src="/images/hc.png" alt="Hospital-Logo" width="76px" className="mr-2 inline-block"/>
        Random Hospital
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mx-auto">
          <li className="nav-list px-2">
            <Link className="nav-link" href="/">HOME</Link>
          </li>
          <li className="nav-list px-2">
            <Link className="nav-link" href="/doctors">DOCTORS</Link>
          </li>
          <li className="nav-list px-2">
            <Link className="nav-link" href="/careers">CAREERS</Link>
          </li>
          <li className="nav-list px-2">
            <Link className="nav-link" href="/contact">DONATE</Link>
          </li>
          <li className="nav-list px-2">
            <Link className="nav-link" href="/health-packs">HEALTH TIPS</Link>
          </li>
          <li className="nav-list px-2">
            <Link className="nav-link" href="/contact">ABOUT US</Link>
          </li>
          <li className="nav-list px-2">
            <Link className="nav-link" href="/contact">CONTACT US</Link>
          </li>
        </ul>
        <form className="form-inline pr-2">
          <Link href="/login">
            <button className="btn btn-outline-success mr-2" type="button">SIGN IN</button>
          </Link>
          <Link href="/signup">
            <button className="btn btn-outline-success" type="button">SIGN UP</button>
          </Link>
        </form>
      </div>
    </nav>
  );
}
