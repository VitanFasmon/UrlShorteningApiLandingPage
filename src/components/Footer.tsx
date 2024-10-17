import LogoComponent from "../assets/icons/LogoComponent";
import Link from "./Link";
import iconFacebook from "../assets/icons/icon-facebook.svg";
import iconInstagram from "../assets/icons/icon-instagram.svg";
import iconPinterest from "../assets/icons/icon-pinterest.svg";
import iconTwitter from "../assets/icons/icon-twitter.svg";
const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-neutral-veryDarkViolet justify-evenly">
      <div className="flex justify-center p-8 text-white">
        <LogoComponent />
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
                className=" text-neutral-grayishViolet font-poppins"
              >
                Link Shortening
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins"
              >
                Branded Links
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins"
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
                className=" text-neutral-grayishViolet font-poppins"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins"
              >
                Developers
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins"
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
                className=" text-neutral-grayishViolet font-poppins"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                bgColor="none"
                href=""
                className=" text-neutral-grayishViolet font-poppins"
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
