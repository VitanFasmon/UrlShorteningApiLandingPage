import { ShortenedLink } from "../types/shortenedLink";
import SingleShortenedLink from "./SingleShortenedLink";

const ShowShortenedLinks = () => {
  const shortenedLinks: ShortenedLink[] = [
    { originalLink: "test1", shortLink: "short test1" },
    { originalLink: "test2", shortLink: "short test2" },
    { originalLink: "test3", shortLink: "short test3" },
  ];
  return (
    <div className="flex flex-col gap-3">
      {shortenedLinks.map((shortenedLink) => {
        return (
          <SingleShortenedLink
            originalLink={shortenedLink.originalLink}
            shortLink={shortenedLink.shortLink}
          />
        );
      })}
    </div>
  );
};
export default ShowShortenedLinks;
