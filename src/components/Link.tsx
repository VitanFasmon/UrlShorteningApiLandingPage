interface ButtonProps {
  children?: React.ReactNode;
  href: string;
  bgColor: "primary" | "secondary" | "none";
  color?: "white";
  className?: string;
}

const Link = ({ children, href, bgColor, color, className }: ButtonProps) => {
  return (
    <a
      className={`${
        bgColor === "primary"
          ? "bg-primary-cyan text-white"
          : bgColor === "secondary"
          ? "bg-primary-darkViolet text-white"
          : " text-neutral-grayishViolet hover:text-primary-darkViolet transition-colors duration-300"
      }  ${className}  ${`rounded-full py-2 px-4 hover:bg-opacity-50 transition-colors duration-300 font-bold`} ${
        color === "white" &&
        "text-white hover:text-neutral-grayishViolet text-center"
      }`}
      href={href}
    >
      {children}
    </a>
  );
};
export default Link;
