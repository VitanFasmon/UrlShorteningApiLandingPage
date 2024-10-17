import { useState } from "react";
import Button from "./Button";

interface SingleShortenedLinkProps {
  originalLink: string;
  shortLink: string;
}
const SingleShortenedLink = ({
  originalLink,
  shortLink,
}: SingleShortenedLinkProps) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const handleOnClick = () => {
    setIsLinkCopied(true);
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 3000);
  };
  return (
    <div className="w-full flex flex-row justify-between bg-white py-2 px-4 rounded items-center">
      <p className="font-poppins ">{originalLink}</p>
      <div className="flex flex-row gap-4  items-center">
        <p className="font-poppins text-primary-cyan">{shortLink}</p>
        <Button
          onClick={() => {
            handleOnClick();
          }}
          bgColor={isLinkCopied ? `secondary` : `primary`}
        >
          {isLinkCopied ? `Copied!` : `Copy`}
        </Button>
      </div>
    </div>
  );
};
export default SingleShortenedLink;
