import { useState } from "react";
import logoIcon from "../assets/icons/logo.svg";
import useIsMobile from "../hooks/useIsMobile";
import hamburgerIcon from "../assets/icons/hamburger.png";
import Link from "./Link";
import LogoComponent from "../assets/icons/LogoComponent";
const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const isMobile = useIsMobile();

  const handleHamburgerOnClick = () => {
    console.log("Hamburger button clicked");
    setHamburgerActive(!hamburgerActive);
  };
  return (
    <section className="flex flex-col items-center px-8 ">
      <div className="flex justify-between items-center md:px-16 py-10 w-full">
        <nav className="flex gap-8 items-center">
          <LogoComponent className="text-primary-darkViolet" />
          {!isMobile && (
            <ul className="flex">
              <li>
                <Link bgColor="none" href="/features">
                  Features
                </Link>
              </li>
              <li>
                <Link bgColor="none" href="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link bgColor="none" href="/resources">
                  Resources
                </Link>
              </li>
            </ul>
          )}
        </nav>
        {!isMobile && (
          <div className="flex gap-6">
            <Link bgColor="none" href="/login">
              Login
            </Link>
            <Link bgColor="primary" href="/sign-up">
              Sign up
            </Link>
          </div>
        )}
        {isMobile && (
          <button onClick={handleHamburgerOnClick}>
            <img src={hamburgerIcon} alt="open navigation menu" />
          </button>
        )}
      </div>
      {hamburgerActive && isMobile && (
        <div className="bg-primary-darkViolet p-8 rounded-lg flex flex-col gap-6 w-full top-24">
          <ul className="flex flex-col items-center border-b border-neutral-grayishViolet gap-6 pb-6">
            <li>
              <Link bgColor="none" href="/features" color="white">
                Features
              </Link>
            </li>
            <li>
              <Link bgColor="none" href="/pricing" color="white">
                Pricing
              </Link>
            </li>
            <li>
              <Link bgColor="none" href="/resources" color="white">
                Resources
              </Link>
            </li>
          </ul>
          <div className="flex flex-col items-stretch gap-6">
            <Link bgColor="none" href="/login" color="white">
              Login
            </Link>
            <Link bgColor="primary" href="/sign-up" color="white">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};
export default Navbar;
