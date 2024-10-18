import { create } from "zustand";
import { LinkGroup } from "../types/shortenedLink";

interface LinksState {
  links: LinkGroup[];
  addLink: (link: LinkGroup) => void;
  setLinks: (links: LinkGroup[]) => void;
  clearLinks: () => void;
}

const useLinksStore = create<LinksState>((set) => ({
  links: [],
  addLink: (link: LinkGroup) =>
    set((state) => ({ links: [...state.links, link] })),
  setLinks: (links: LinkGroup[]) => set({ links: links }),
  clearLinks: () => set({ links: [] }),
}));

export default useLinksStore;
