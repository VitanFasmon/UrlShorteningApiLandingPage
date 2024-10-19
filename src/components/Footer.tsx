import LogoComponent from "../assets/icons/LogoComponent";
import Link from "./Link";
import iconFacebook from "../assets/icons/icon-facebook.svg";
import iconInstagram from "../assets/icons/icon-instagram.svg";
import iconPinterest from "../assets/icons/icon-pinterest.svg";
import iconTwitter from "../assets/icons/icon-twitter.svg";
const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row bg-neutral-veryDarkViolet justify-evenly items-center lg:items-start">
      <div className="flex justify-center p-8">
        <a href="/">
          <LogoComponent className="text-white" />
        </a>
      </div>
      <div className="flex flex-col md:flex-row  items-center md:items-start">
        <div className="flex flex-col gap-8 p-8  items-center md:items-start">
          <h3 className="text-xl font-bold text-white font-poppins">
            Features
          </h3>
          <ul className="flex flex-col gap-4   items-center md:items-start">
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins pl-0"
              >
                Link Shortening
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins pl-0"
              >
                Branded Links
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins pl-0"
              >
                Analytics
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8 p-8 items-center md:items-start">
          <h3 className="text-xl font-bold text-white font-poppins">
            Resources
          </h3>

          <ul className="flex flex-col gap-4 items-center md:items-start">
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins pl-0"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins pl-0"
              >
                Developers
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins pl-0"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8 p-8 items-center md:items-start">
          <h3 className="text-xl font-bold text-white font-poppins">Company</h3>
          <ul className="flex flex-col gap-4 items-center md:items-start">
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins pl-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins pl-0"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins pl-0"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins pl-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 justify-center p-8">
        <Link href="" bgColor="none">
          <img src={iconFacebook} alt="Facebook icon" />
        </Link>
        <Link href="" bgColor="none">
          <img src={iconTwitter} alt="Twitter icon" />
        </Link>
        <Link href="" bgColor="none">
          <img src={iconPinterest} alt="Pinterest icon" />
        </Link>
        <Link href="" bgColor="none">
          <img src={iconInstagram} alt="Instagram icon" />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
