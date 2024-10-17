import useLinksStore from "../store/useLinksStore";
import { LinkGroup } from "../types/shortenedLink";
import SingleShortenedLink from "./SingleShortenedLink";

const ShowShortenedLinks = () => {
  const links: LinkGroup[] = useLinksStore((state) => state.links);

  return (
    <div className="flex flex-col gap-3">
      {links.map((shortenedLink) => {
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
