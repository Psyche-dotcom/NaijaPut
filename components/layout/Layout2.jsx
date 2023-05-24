import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { navData } from "@/dummyData/data";
import NavItem from "./NavItem";
import Image from "next/image";
import logo from "../../public/logo.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FooterItem from "../common/FooterItem";
import FooterSocialComponent from "../common/FooterSocialComponent";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
const Layout2 = ({ children }) => {
  const [menuMobile, setmenuMobile] = useState(false);
  const [customNavBG, setcustomNavBG] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY > 50) {
      setcustomNavBG(true);
    } else {
      setcustomNavBG(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
    return () => {
      window.removeEventListener("scroll", changeNavColor);
    };
  });
  return (
    <>
      <nav className="bg-white border-2 border-b-2 border-grey">
        <div className="w-11/12 md:w-10/12 mx-auto py-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="NaijaPut Logo"
                className="logo"
                style={{
                  width: "50px",
                }}
              />
            </Link>
            <div className="lg:flex lg:gap-8  ">
              {navData.map(({ title, id, link }) => {
                return <NavItem key={id} title={title} link={link} />;
              })}
              <Link href="/login">
                <span
                  className="text-white bg-main_projcolor font-body_text font-semibold rounded-lg px-4 py-2 hover:bg-btn_colorh "
                  aria-label="Earn your pay"
                >
                  Earn your pay{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {children}
      <footer className="bg-black">
        <section className="w-11/12 md:w-10/12  mx-auto py-16">
          <div className="flex flex-col gap-32">
            <div className="flex justify-between">
              <Link href="/">
                <Image
                  src={logo}
                  alt="NaijaPut Logo"
                  className="logo"
                  style={{
                    width: "50px",
                  }}
                />
              </Link>
              <div className="flex gap-8">
                <div className="flex flex-col gap-3">
                  <FooterItem title="Company" link="#" wight="semibold" />
                  <div className="flex flex-col gap-2 font">
                    <FooterItem title="FAQs" link="#" wight="light" />
                    <FooterItem title="About Us" link="/#about" wight="light" />
                    <FooterItem title="Our investors" link="#" wight="light" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <FooterItem title="Product" link="#" wight="semibold" />
                  <div className="flex flex-col gap-2 font">
                    <FooterItem title="Stocks" link="#" wight="light" />
                    <FooterItem title="Fixed returns" link="#" wight="light" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <FooterItem title="Legal" link="#" wight="semibold" />
                  <div className="flex flex-col gap-2 font">
                    <FooterItem title="Privacy policy" link="#" wight="light" />
                    <FooterItem title="Third party" link="#" wight="light" />
                    <FooterItem
                      title="Terms of services"
                      link="#"
                      wight="light"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <FooterItem title="Contact us" link="#" wight="semibold" />
                  <div className="flex flex-col gap-2 font">
                    <FooterItem
                      title="Support@naijaput.com"
                      link="#"
                      wight="light"
                    />
                    <div className="flex gap-3">
                      <FooterSocialComponent
                        link="#"
                        SocialIcon={TwitterIcon}
                      />
                      <FooterSocialComponent
                        link="#"
                        SocialIcon={FacebookIcon}
                      />
                      <FooterSocialComponent
                        link="#"
                        SocialIcon={YouTubeIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-white">
              ©Naija-Put All rights reserved.
            </p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Layout2;
