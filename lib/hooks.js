export const handleScroll = async () => {
  const mynavbar = document.getElementById("myNav");
  if (scrollY > 20) {
    mynavbar.classList.add("shadow-lg");
  } else {
    mynavbar.classList.remove("shadow-lg");
  }

  let h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";

  let percent =
    (await ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight))) * 100;

  return percent;
};
