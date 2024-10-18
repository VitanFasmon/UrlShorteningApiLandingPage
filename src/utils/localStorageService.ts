import useLinksStore from "../store/useLinksStore";
import { LinkGroup } from "../types/shortenedLink";
const saveLinksToLocalStorage = () => {
  const { links } = useLinksStore.getState();
  localStorage.setItem("links", JSON.stringify(links));
};
const getFromLocalStorage = (): LinkGroup[] => {
  const links: LinkGroup[] = JSON.parse(localStorage.getItem("links") || "[]");
  return links;
};
const setLinksFromLocalStorage = () => {
  const { setLinks } = useLinksStore.getState();
  setLinks(getFromLocalStorage());
};

export {
  saveLinksToLocalStorage,
  getFromLocalStorage,
  setLinksFromLocalStorage,
};
