import Link from "next/link";
import React from "react";

const FooterItem = ({ title, link, wight }) => {
  return (
    <Link href={link}>
      <span
        className={`text-white  font-${wight} font-body_text hover:text-main_projcolor`}
        aria-label={title}
      >
        {title}
      </span>
    </Link>
  );
};

export default FooterItem;
