import { create } from "zustand";
import { LinkGroup } from "../types/shortenedLink";

interface LinksState {
  links: LinkGroup[];
  addLink: (link: LinkGroup) => void;
  clearLinks: () => void;
}

const useLinksStore = create<LinksState>((set) => ({
  links: [],
  addLink: (link: LinkGroup) =>
    set((state) => ({ links: [...state.links, link] })),
  clearLinks: () => set({ links: [] }),
}));

export default useLinksStore;
