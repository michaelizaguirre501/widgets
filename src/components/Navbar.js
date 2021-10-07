import React from "react";
import Link from "./Link";

const Navbar = () => {
  return (
    <div className="secondary ui pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
      <Link href="/search" className="item">
        Search
      </Link>
    </div>
  );
};

export default Navbar;
