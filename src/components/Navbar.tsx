import logoIcon from "../assets/icons/logo.svg";
import Button from "./Button";
const Navbar = () => {
  const handleLoginOnClick = () => {
    console.log("Login button clicked");
  };
  const handleSignUpOnClick = () => {
    console.log("Sign up button clicked");
  };
  return (
    <nav className="flex justify-between items-center px-24 py-10">
      <div className="flex gap-8 items-center">
        <img src={logoIcon} alt="Shortly logo" />
        <ul className="flex">
          <li>
            <Button bgColor="none" rounded onClick={handleLoginOnClick}>
              Features
            </Button>
          </li>
          <li>
            <Button bgColor="none" rounded onClick={handleLoginOnClick}>
              Pricing
            </Button>
          </li>
          <li>
            <Button bgColor="none" rounded onClick={handleLoginOnClick}>
              Resources
            </Button>
          </li>
        </ul>
      </div>
      <div className="flex gap-6">
        <Button bgColor="none" rounded onClick={handleLoginOnClick}>
          Login
        </Button>
        <Button bgColor="primary" rounded onClick={handleSignUpOnClick}>
          Sign up
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
