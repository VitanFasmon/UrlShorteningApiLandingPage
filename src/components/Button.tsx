interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  bgColor: "primary" | "secondary" | "none";
  className?: string;
}

const Button = ({ children, onClick, bgColor, className }: ButtonProps) => {
  return (
    <button
      className={`${
        bgColor === "primary"
          ? "bg-primary-cyan text-white"
          : bgColor === "secondary"
          ? "bg-primary-darkViolet text-white"
          : " text-neutral-grayishViolet hover:text-primary-darkViolet transition-colors duration-300"
      } ${className} py-2 px-4 hover:bg-opacity-50 transition-colors duration-300 font-bold rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
