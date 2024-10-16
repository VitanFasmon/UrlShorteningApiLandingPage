import logoIcon from "../assets/icons/logo.svg";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-24 py-10">
      <div className="flex gap-8 items-center">
        <img src={logoIcon} alt="Shortly logo" />
        <ul className="flex gap-6">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="flex gap-6">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};
export default Navbar;
