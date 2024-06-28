import gsap from "gsap";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");

  if (bannerOne) {
    gsap.fromTo(
      bannerOne,
      { yPercent: 0 },
      {
        yPercent: 100,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }
};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1");

  if (bannerOne) {
    gsap.to(bannerOne, {
      yPercent: -100,
      duration: 2.5,
      stagger: 0.2,
      ease: "power3.in",
      onComplete: () => {
        router.push(href);
      },
    });
  } else {
    router.push(href); // Fallback to navigate to the next page
  }
};
