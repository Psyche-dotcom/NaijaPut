import Link from "next/link";
import React from "react";

const NavItem = ({ title, link }) => {
  return (
    <Link href={link}>
      <span
        className="text-nav_color font-body_text font-semibold hover:text-main_projcolor"
        aria-label={title}
      >
        {title}
      </span>
    </Link>
  );
};

export default NavItem;
