import React from "react";

const Navbar = () => {
  return (
    <div className="secondary ui pointing menu">
      <a href="/" className="item">
        Accordion
      </a>
      <a href="/dropdown" className="item">
        Dropdown
      </a>
      <a href="/translate" className="item">
        Translate
      </a>
      <a href="/search" className="item">
        Search
      </a>
    </div>
  );
};

export default Navbar;
