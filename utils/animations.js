import gsap from "gsap";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");

  if (bannerOne) {
    const tl = gsap.timeline();
    tl.fromTo(
      bannerOne,
      { yPercent: 0 },
      {
        yPercent: 100,
        duration: 1.5,
        ease: "power3.out",
      }
    ).to(bannerOne, {
      yPercent: 100,
      duration: 1.5,
      ease: "power3.out",
      delay: 0,
    });
  }
};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1");

  if (bannerOne) {
    const tl = gsap.timeline();
    tl.to(bannerOne, {
      yPercent: -0,
      duration: 1.5,
      ease: "power3.in",
    })
      .to(bannerOne, {
        yPercent: -100,
        duration: 1.5,
        ease: "power3.in",
        delay: 1,
        onComplete: () => {
          router.push(href);
        },
      });
  } else {
    router.push(href); // Fallback to navigate to the next page
  }
};
