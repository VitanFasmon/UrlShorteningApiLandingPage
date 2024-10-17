import useIsMobile from "../hooks/useIsMobile";
import backgroundMobile from "../assets/images/bg-boost-mobile.svg";
import backgroundDesktop from "../assets/images/bg-boost-desktop.svg";
import Link from "./Link";

const BottomCallToAction = () => {
  const isMobile = useIsMobile();
  return (
    <section
      className="flex flex-col items-center justify-center w-full h-[300px] bg-primary-darkViolet bg-cover bg-no-repeat gap-8"
      style={
        isMobile
          ? { backgroundImage: `url(${backgroundMobile})` }
          : { backgroundImage: `url(${backgroundDesktop})` }
      }
    >
      <h3 className="text-3xl font-bold text-white font-poppins">
        Boost your links today
      </h3>
      <Link bgColor="primary" href="/get-started">
        Get Started
      </Link>
    </section>
  );
};

export default BottomCallToAction;
