import gsap from "gsap";

export const animatePageIn = () => {

};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("");

  if (bannerOne) {
    const tl = gsap.timeline();

  } else {
    router.push(href); // Fallback to navigate to the next page
  }
};
