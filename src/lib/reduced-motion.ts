import { readable } from "svelte/store";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

const getInitialMotionPreference = () => {
  return window.matchMedia(reducedMotionQuery).matches;
};

export default readable(getInitialMotionPreference(), (set) => {
  const setReducedMotion = (event) => {
    set(event.matches);
  };
  const mediaQueryList = window.matchMedia(reducedMotionQuery);
  mediaQueryList.addEventListener("change", setReducedMotion);

  return () => {
    mediaQueryList.removeEventListener("change", setReducedMotion);
  };
});
