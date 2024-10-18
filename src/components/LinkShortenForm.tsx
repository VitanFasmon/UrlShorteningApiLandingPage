import Button from "./Button";
import backgroundMobile from "../assets/images/bg-shorten-mobile.svg";
import backgroundDesktop from "../assets/images/bg-shorten-desktop.svg";
import useIsMobile from "../hooks/useIsMobile";
import { urlShortenerService } from "../data/urlShortenerService";
import useLinksStore from "../store/useLinksStore";
import { useState } from "react";
import { saveLinksToLocalStorage } from "../utils/localStorageService";
const LinkShortenForm = () => {
  const [inputLink, setInputLink] = useState("");
  const { addLink, links } = useLinksStore();
  async function shortenMyURL(longUrl: string) {
    try {
      const shortUrl = await urlShortenerService(longUrl);
      addLink({ originalLink: longUrl, shortLink: shortUrl });
      setInputLink("");
      saveLinksToLocalStorage();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error: ${error.message}`);
      } else {
        throw new Error(`An unknown error occurred`);
      }
    }
  }

  const handleShortenItOnClick = () => {
    shortenMyURL(inputLink);
  };
  const isMobile = useIsMobile();
  return (
    <section className="flex flex-col gap-8 items-center  p-8">
      <div
        className="flex flex-col md:flex-row gap-4  bg-primary-darkViolet p-8 rounded-lg justify-center md:w-fit w-full md:items-center  bg-cover bg-no-repeat"
        style={
          isMobile
            ? { backgroundImage: `url(${backgroundMobile})` }
            : { backgroundImage: `url(${backgroundDesktop})` }
        }
      >
        <div className="flex flex-col gap-2 md:w-fit w-full">
          <input
            type="text"
            id="link"
            value={inputLink}
            onChange={(e) => setInputLink(e.target.value)}
            placeholder="Shorten a link here..."
            aria-label="Shorten a link here..."
            className="md:w-[500px] w-full px-4 py-2 text-neutral-grayishViolet bg-neutral-veryLightGrayishViolet rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan"
          />
        </div>
        <Button
          bgColor="primary"
          onClick={handleShortenItOnClick}
          className="md:w-fit"
        >
          Shorten It!
        </Button>
      </div>
    </section>
  );
};
export default LinkShortenForm;
