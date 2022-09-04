import { writable } from "svelte/store";
import { activeRoute, pendingRoute } from "@roxi/routify";

type BeforeNavigate = ({ from, to }: Navigating) => void;

export type Navigating = {
  from?: URL;
  to?: URL;
};

const store: Navigating = {};

export const navigating = writable<Navigating>({}, (set) => {
  set(store);
  return () => {};
});

activeRoute.subscribe((route) => {
  navigating.update((st) => ({
    from: new URL(route.url),
    ...st,
  }));
});

pendingRoute.subscribe((route) => {
  navigating.update((st) => ({
    ...st,
    to: new URL(route.url),
  }));
});

export const beforeNavigate = (fn: BeforeNavigate) => {
  navigating.subscribe((nav) => {
    fn({ ...nav });
  });
};
