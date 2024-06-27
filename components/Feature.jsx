import React from "react";

const Feature = () => {
    const gradientStyle = {
        background: "linear-gradient(302deg, #272727 9.61%, #222 83.63%)",
        boxShadow: "0px 1.296px 1.296px 0px rgba(156, 156, 156, 0.25) inset",
        filter: "drop-shadow(0px 15px 60px #2B2B2B)",
      };
      
  return (
    <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
      <div className="flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-[#D48DFF] text-2xl md:text-[32px] font-bold">
            Feature Modules
          </p>
          <p className="text-white text-3xl md:text-6xl font-bold">
            Why Choose Loyaltri
          </p>
          <p className="text-white text-xl font-normal">
            Where HR Innovation Meets Practical Solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-[#131313] rounded-[20px] border border-[#121111] px-8 py-10 flex flex-col justify-center items-center gap-5 h-full">
            <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full" style={gradientStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.5575 25.9192C9.17416 25.8642 8.76667 25.8333 8.33333 25.8333C5.14167 25.8333 3.35917 27.5175 2.67583 28.3567C2.565 28.5008 2.50584 28.6775 2.50584 28.86C2.50584 28.865 2.50583 28.87 2.505 28.8742C2.5 29.1825 2.5 29.5908 2.5 30C2.5 30.46 2.87333 30.8333 3.33333 30.8333H9.31C9.21583 30.5683 9.16667 30.2867 9.16667 30C9.16667 29.0517 9.16666 27.9217 9.17 27.2542C9.17 26.7792 9.30583 26.3167 9.5575 25.9192ZM28.3333 30.8333H11.6667C11.4458 30.8333 11.2333 30.7458 11.0775 30.5892C10.9208 30.4333 10.8333 30.2208 10.8333 30C10.8333 29.0542 10.8333 27.9292 10.8367 27.2592V27.2542C10.8367 27.0625 10.9033 26.8775 11.0242 26.7292C12.0583 25.5483 15.1833 22.5 20 22.5C25.4517 22.5 28.1892 25.5425 29.0267 26.69C29.1192 26.8308 29.1667 26.99 29.1667 27.1525V30C29.1667 30.2208 29.0792 30.4333 28.9225 30.5892C28.7667 30.7458 28.5542 30.8333 28.3333 30.8333ZM30.69 30.8333H36.6667C37.1267 30.8333 37.5 30.46 37.5 30V28.8592C37.5 28.675 37.4392 28.4967 37.3275 28.3508C36.6408 27.5175 34.8575 25.8333 31.6667 25.8333C31.2558 25.8333 30.8683 25.8608 30.5033 25.9108C30.7192 26.2883 30.8333 26.7167 30.8333 27.1542V30C30.8333 30.2867 30.7842 30.5683 30.69 30.8333ZM8.33333 15.8333C6.03333 15.8333 4.16667 17.7 4.16667 20C4.16667 22.3 6.03333 24.1667 8.33333 24.1667C10.6333 24.1667 12.5 22.3 12.5 20C12.5 17.7 10.6333 15.8333 8.33333 15.8333ZM31.6667 15.8333C29.3667 15.8333 27.5 17.7 27.5 20C27.5 22.3 29.3667 24.1667 31.6667 24.1667C33.9667 24.1667 35.8333 22.3 35.8333 20C35.8333 17.7 33.9667 15.8333 31.6667 15.8333ZM20 9.16667C16.7808 9.16667 14.1667 11.7808 14.1667 15C14.1667 18.2192 16.7808 20.8333 20 20.8333C23.2192 20.8333 25.8333 18.2192 25.8333 15C25.8333 11.7808 23.2192 9.16667 20 9.16667Z"
                  fill="url(#paint0_linear_1455_7398)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1455_7398"
                    x1="37.0339"
                    y1="30.3435"
                    x2="12.3114"
                    y2="1.75663"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#8B8B8B" />
                    <stop offset="1" stop-color="#EAEAEA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-white text-2xl font-bold">Our Approach</p>
            <p className="text-[#ADADAD] text-center text-[16px] font-medium">
              Experience personalized, one-on-one service. Trust us with
              responsiveness, intuition, and honesty. Our reputation thrives on
              exceptional customer service — transformative and reliable
            </p>
          </div>
          <div className="bg-[#131313] rounded-[20px] border border-[#121111] px-8 py-10 flex flex-col justify-center items-center gap-5 h-full">
            <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full" style={gradientStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
  <path d="M15.7881 15.4727L18.6832 26.6509L26.9162 18.5546L15.7881 15.4727ZM44.5746 44.7454L41.6795 33.5672L33.4464 41.6635L44.5746 44.7454ZM21.3855 22.5909L37.5511 39.0295L38.9771 37.6272L22.8115 21.1885L21.3855 22.5909Z" fill="url(#paint0_linear_1455_7407)"/>
  <path d="M15.3281 44.2372L26.5063 41.3421L18.41 33.1091L15.3281 44.2372ZM44.6008 15.4507L33.4226 18.3458L41.5189 26.5789L44.6008 15.4507ZM22.4463 38.6398L38.885 22.4742L37.4826 21.0482L21.044 37.2138L22.4463 38.6398Z" fill="url(#paint1_linear_1455_7407)"/>
  <defs>
    <linearGradient id="paint0_linear_1455_7407" x1="43.4943" y1="45.0408" x2="45.0817" y2="43.3698" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8B8B8B"/>
      <stop offset="1" stop-color="#EAEAEA"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1455_7407" x1="44.8963" y1="16.531" x2="43.2252" y2="14.9436" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8B8B8B"/>
      <stop offset="1" stop-color="#EAEAEA"/>
    </linearGradient>
  </defs>
</svg>
            </div>
            <p className="text-white text-2xl font-bold">We  Innovate</p>
            <p className="text-[#ADADAD] text-center text-[16px] font-medium">
            Dedicated professionals, united by innovation and excellence. Constantly improving our application for cutting-edge design, functionality, user experience, and HR best practices compliance.
            </p>
          </div>
          <div className="bg-[#131313] rounded-[20px] border border-[#121111] px-8 py-10 flex flex-col justify-center items-center gap-5 h-full">
            <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full" style={gradientStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
  <g clip-path="url(#clip0_1455_7413)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.977 28.9084C16.977 28.9282 16.9775 29.9832 16.9785 30.544H25.0208C25.0215 29.99 25.0218 28.9245 25.0218 28.9084C25.0218 22.5031 29.1599 24.7869 29.1599 18.4595C29.1599 13.9525 25.5063 10.299 20.9994 10.299C16.4925 10.299 12.8389 13.9525 12.8389 18.4595C12.8389 24.787 16.977 22.5032 16.977 28.9084ZM26.315 17.5411C26.315 17.8007 26.5255 18.0112 26.7851 18.0112C27.0448 18.0112 27.2553 17.8007 27.2553 17.5411C27.2553 16.0221 26.6396 14.6469 25.6441 13.6514C24.6486 12.6559 23.2734 12.0402 21.7544 12.0402C21.4948 12.0402 21.2842 12.2507 21.2842 12.5103C21.2842 12.77 21.4948 12.9805 21.7544 12.9805C23.0138 12.9805 24.154 13.491 24.9792 14.3162C25.8045 15.1415 26.315 16.2817 26.315 17.5411Z" fill="url(#paint0_linear_1455_7413)"/>
    <path d="M17.3109 31.0142C17.0512 31.0142 16.8407 31.2247 16.8407 31.4843C16.8407 31.744 17.0512 31.9545 17.3109 31.9545H24.5937C24.8534 31.9545 25.0639 31.744 25.0639 31.4843C25.0639 31.2247 24.8534 31.0142 24.5937 31.0142H17.3109ZM8.3452 17.5836C8.08553 17.5836 7.875 17.7941 7.875 18.0538C7.875 18.3134 8.08553 18.5239 8.3452 18.5239H10.4427C10.7023 18.5239 10.9129 18.3134 10.9129 18.0538C10.9129 17.7941 10.7023 17.5836 10.4427 17.5836H8.3452ZM10.4353 11.364C10.2111 11.2342 9.92414 11.3106 9.79432 11.5348C9.66449 11.759 9.74096 12.046 9.96512 12.1758L11.7816 13.2245C12.0057 13.3543 12.2927 13.2779 12.4226 13.0537C12.5524 12.8296 12.4759 12.5426 12.2517 12.4127L10.4353 11.364ZM15.3545 7.02028C15.2246 6.79609 14.9377 6.71963 14.7135 6.84945C14.4893 6.9793 14.4128 7.26629 14.5427 7.49045L15.5914 9.3069C15.7212 9.53106 16.0082 9.60753 16.2324 9.47771C16.4565 9.34788 16.533 9.06089 16.4032 8.83673L15.3545 7.02028ZM21.7882 5.7199C21.7882 5.46025 21.5777 5.24973 21.318 5.24973C21.0584 5.24973 20.8479 5.46025 20.8479 5.7199V7.81738C20.8479 8.07703 21.0584 8.28755 21.318 8.28755C21.5777 8.28755 21.7882 8.07703 21.7882 7.81738V5.7199ZM28.0078 7.81002C28.1376 7.58585 28.0612 7.29886 27.837 7.16902C27.6128 7.03919 27.3258 7.11566 27.196 7.33984L26.1473 9.15627C26.0174 9.38043 26.0939 9.66742 26.3181 9.79725C26.5423 9.92707 26.8293 9.85061 26.9591 9.62644L28.0078 7.81002ZM32.3515 12.7291C32.5756 12.5993 32.6521 12.3123 32.5223 12.0881C32.3924 11.864 32.1054 11.7875 31.8813 11.9173L30.0648 12.9661C29.8406 13.0959 29.7641 13.3829 29.894 13.6071C30.0238 13.8312 30.3108 13.9077 30.535 13.7779L32.3515 12.7291ZM33.6519 19.1629C33.9115 19.1629 34.1221 18.9523 34.1221 18.6927C34.1221 18.433 33.9115 18.2225 33.6519 18.2225H31.5544C31.2947 18.2225 31.0842 18.433 31.0842 18.6927C31.0842 18.9523 31.2947 19.1629 31.5544 19.1629H33.6519ZM17.3109 33.365C17.0512 33.365 16.8407 33.1545 16.8407 32.8949C16.8407 32.6352 17.0512 32.4247 17.3109 32.4247H24.5937C24.8534 32.4247 25.0639 32.6352 25.0639 32.8949C25.0639 33.1545 24.8534 33.365 24.5937 33.365H17.3109ZM17.3109 33.8352C17.0512 33.8352 16.8407 34.0458 16.8407 34.3054C16.8407 34.5651 17.0512 34.7756 17.3109 34.7756H24.5937C24.8534 34.7756 25.0639 34.5651 25.0639 34.3054C25.0639 34.0458 24.8534 33.8352 24.5937 33.8352H17.3109Z" fill="url(#paint1_linear_1455_7413)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0543 35.2458H18.8506C18.9941 36.0947 19.8804 36.7482 20.9524 36.7482C22.0245 36.7482 22.9107 36.0947 23.0543 35.2458Z" fill="url(#paint2_linear_1455_7413)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_1455_7413" x1="28.9425" y1="30.0863" x2="8.7306" y2="18.4226" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8B8B8B"/>
      <stop offset="1" stop-color="#EAEAEA"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1455_7413" x1="33.7725" y1="34.1081" x2="2.93162" y2="14.4834" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8B8B8B"/>
      <stop offset="1" stop-color="#EAEAEA"/>
    </linearGradient>
    <linearGradient id="paint2_linear_1455_7413" x1="22.9983" y1="36.7142" x2="21.6135" y2="33.9408" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8B8B8B"/>
      <stop offset="1" stop-color="#EAEAEA"/>
    </linearGradient>
    <clipPath id="clip0_1455_7413">
      <rect width="42" height="42" fill="white"/>
    </clipPath>
  </defs>
</svg>
            </div>
            <p className="text-white text-2xl font-bold">Our values</p>
            <p className="text-[#ADADAD] text-center text-[16px] font-medium">
            Deeply committed to customers and solutions, rooted in unwavering brand values. Embrace a people-first design, prioritizing collaboration and meticulous attention to detail.

            </p>
          </div>
          <div className="bg-[#131313] rounded-[20px] border border-[#121111] px-8 py-10 flex flex-col justify-center items-center gap-5 h-full">
            <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full" style={gradientStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
  <path d="M27.5 11L32.8109 16.3109L24.7758 24.75L15.5805 15.5805L2.75 33L15.5805 22L24.7758 31.625L36.025 19.525L41.25 24.75V11H27.5Z" fill="black"/>
  <path d="M27.5 11L32.8109 16.3109L24.7758 24.75L15.5805 15.5805L2.75 33L15.5805 22L24.7758 31.625L36.025 19.525L41.25 24.75V11H27.5Z" fill="url(#paint0_linear_1455_7423)"/>
  <defs>
    <linearGradient id="paint0_linear_1455_7423" x1="3.26276" y1="32.5027" x2="28.0004" y2="1.5145" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8B8B8B"/>
      <stop offset="1" stop-color="#EAEAEA"/>
    </linearGradient>
  </defs>
</svg>
            </div>
            <p className="text-white text-2xl font-bold">Growth</p>
            <p className="text-[#ADADAD] text-center text-[16px] font-medium">
            Whether you're a small startup or a large enterprise, our HRMS application scales with your business. Adapt and grow without worrying about outgrowing your HR solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
