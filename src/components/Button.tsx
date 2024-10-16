interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  bgColor: "primary" | "secondary" | "none";
  rounded: boolean;
}

const Button = ({
  children,
  onClick,
  bgColor: color,
  rounded,
}: ButtonProps) => {
  return (
    <button
      className={`${
        color === "primary"
          ? "bg-primary-cyan text-white"
          : color === "secondary"
          ? "bg-primary-darkViolet text-white"
          : " text-neutral-grayishViolet hover:text-primary-darkViolet transition-colors duration-300"
      } ${
        rounded ? "rounded-full" : "rounded"
      } py-2 px-4 hover:bg-opacity-50 transition-colors duration-300 font-bold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
