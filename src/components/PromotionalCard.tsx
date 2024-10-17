interface PromotionalCardProps {
  iconUrl: string;
  title: string;
  content: string;
  className?: string;
}
const PromotionalCard = ({
  iconUrl,
  title,
  content,
  className,
}: PromotionalCardProps) => {
  return (
    <div
      className={` bg-white  rounded-lg shadow-lg ${className} min-w-min max-w-[400px]`}
    >
      <div className="rounded-full w-20 h-20 bg-primary-darkViolet flex items-center justify-center relative -top-10 left-1/2 transform -translate-x-1/2  lg:left-20">
        <img src={iconUrl} alt="Card image" />
      </div>

      <div className="flex flex-col gap-4 items-center lg:items-start p-6">
        <h3 className="text-2xl font-bold text-primary-darkViolet font-poppins  text-center lg:text-left">
          {title}
        </h3>
        <p className="text-neutral-grayishViolet font-bold text-body text-center lg:text-left">
          {content}
        </p>
      </div>
    </div>
  );
};
export default PromotionalCard;
