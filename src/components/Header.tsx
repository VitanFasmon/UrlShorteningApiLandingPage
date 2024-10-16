import deskImage from "../assets/images/illustration-working.svg";
import Link from "./Link";
const Header = () => {
  const handleGetStartedOnClick = () => {};
  return (
    <header className="flex justify-between items-center md:flex-row flex-col-reverse gap-8 md:gap-0">
      <div className="flex flex-col gap-8 items-center md:items-start md:px-24 px-8">
        <div className="flex flex-col gap-4  text-center md:text-start ">
          <h1 className="text-5xl font-bold text-primary-darkViolet font-poppins">
            More than just shorter links
          </h1>
          <p className="text-neutral-grayishViolet font-bold text-body">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
        <Link bgColor="primary" href="/get-started">
          Get Started
        </Link>
      </div>
      <div>
        <img
          src={deskImage}
          alt="Desk image"
          className="md:h-full md:min-h-[300px] sm:h-[500px] h-auto object-cover object-left "
        />
      </div>
    </header>
  );
};
export default Header;
