export const setActive = (navTitle, navRefs) => {
  const otherNavs = navRefs.filter(
    (i) => !i.current.classList.contains(navTitle)
  );
  const active = navRefs.find((i) => i.current.classList.contains(navTitle));
  otherNavs.forEach((i) => i.current.classList.remove("active"));
  active.current.classList.add("active");
};
