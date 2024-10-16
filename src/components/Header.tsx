import Button from "./Button";
import deskImage from "../assets/images/illustration-working.svg";
const Header = () => {
  const handleGetStartedOnClick = () => {};
  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-col gap-8 items-start px-24">
        <div>
          <h1 className="text-5xl font-bold text-primary-darkViolet font-poppins">
            More than just shorter links
          </h1>
          <p className="text-neutral-grayishViolet font-bold text-body">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
        <Button bgColor="primary" rounded onClick={handleGetStartedOnClick}>
          Get Started
        </Button>
      </div>
      <img src={deskImage} alt="Desk image" />
    </header>
  );
};
export default Header;
