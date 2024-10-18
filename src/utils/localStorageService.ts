import useLinksStore from "../store/useLinksStore";
import { LinkGroup } from "../types/shortenedLink";
const { links, setLinks } = useLinksStore.getState();
const saveToLocalStorage = () => {
  localStorage.setItem("links", JSON.stringify(links));
};
const getFromLocalStorage = (): LinkGroup[] => {
  const links: LinkGroup[] = JSON.parse(localStorage.getItem("links") || "[]");
  return links;
};
const setLinksFromLocalStorage = () => {
  setLinks(getFromLocalStorage());
};

export { saveToLocalStorage, getFromLocalStorage, setLinksFromLocalStorage };
