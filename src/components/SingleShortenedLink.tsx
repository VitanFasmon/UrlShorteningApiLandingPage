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

  const truncateLink = (link: string, maxLength: number) => {
    if (link.length > maxLength) {
      return link.substring(0, maxLength) + "...";
    }
    return link;
  };

  const handleOnClick = () => {
    navigator.clipboard.writeText(shortLink);
    setIsLinkCopied(true);
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between bg-white py-2 px-4 rounded md:items-center">
      <p className="font-poppins md:border-none border-b border-neutral-lightGrayishViolet py-2">
        {truncateLink(originalLink, 30)}{" "}
      </p>
      <div className="flex flex-col md:flex-row gap-2  md:items-center md:w-fit w-full py-2">
        <a href={shortLink} target="blank">
          <p className="font-poppins text-primary-cyan ">
            {truncateLink(shortLink, 30)}{" "}
          </p>
        </a>
        <Button
          onClick={() => {
            handleOnClick();
          }}
          bgColor={isLinkCopied ? `secondary` : `primary`}
          className="w-full"
        >
          {isLinkCopied ? `Copied!` : `Copy`}
        </Button>
      </div>
    </div>
  );
};

export default SingleShortenedLink;
