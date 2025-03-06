import React from "react";
import Image from "next/image";
import logoImg from "../utils";

export default function Header() {
  return (
    <header className="">
      <nav>
        {/* Logo */}
        <div>
          <Image
            alt="Comfort Driving School Logo"
            src={logoImg}
            width={100}
            height={100}
          />
        </div>
        {/* Menu */}
        <div>
          <ul>
            <li>About Us</li>
            <li>Donate</li>
            <li>Get Involved</li>
            <li>Services</li>
          </ul>
          <div>
            <button>DONATE</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
