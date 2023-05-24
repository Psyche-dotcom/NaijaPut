import Link from "next/link";
import React from "react";

const FooterSocialComponent = ({ link, SocialIcon }) => {
  return (
    <Link href={link}>
      <SocialIcon className="text-white font-body_text hover:text-main_projcolor" />
    </Link>
  );
};

export default FooterSocialComponent;
