import { useEffect } from "react";
import useLinksStore from "../store/useLinksStore";
import SingleShortenedLink from "./SingleShortenedLink";
import { setLinksFromLocalStorage } from "../utils/localStorageService";
const ShowShortenedLinks = () => {
  const { links } = useLinksStore();
  useEffect(() => {}, [links]);
  useEffect(() => {
    setLinksFromLocalStorage();
  }, []);
  return (
    <div className="flex flex-col gap-3">
      {links.map((shortenedLink) => {
        return (
          <SingleShortenedLink
            key={crypto.randomUUID()}
            originalLink={shortenedLink.originalLink}
            shortLink={shortenedLink.shortLink}
          />
        );
      })}
    </div>
  );
};
export default ShowShortenedLinks;
