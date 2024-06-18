import React from "react";

export const Hero = ({
    description=""
}) => {

  return (
    <section className="bg-custom-gradient h-screen flex justify-center items-center">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0">
        <div className="flex flex-col justify-center items-center gap-16">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="195"
              height="170"
              viewBox="0 0 195 170"
              fill="none"
            >
              <ellipse
                cx="160.267"
                cy="37.2177"
                rx="16.828"
                ry="16.8831"
                fill="white"
              />
              <g filter="url(#filter0_b_1269_606)">
                <rect
                  x="134.854"
                  y="72.9142"
                  width="50.8367"
                  height="76.3828"
                  rx="25.4183"
                  stroke="url(#paint0_linear_1269_606)"
                  stroke-width="17.8503"
                />
              </g>
              <ellipse
                cx="104.815"
                cy="29.5363"
                rx="18.9315"
                ry="18.9935"
                fill="white"
              />
              <g filter="url(#filter1_b_1269_606)">
                <rect
                  x="76.2104"
                  y="68.1391"
                  width="57.1913"
                  height="85.9305"
                  rx="28.5956"
                  stroke="url(#paint1_linear_1269_606)"
                  stroke-width="20.0816"
                />
              </g>
              <ellipse
                cx="42.955"
                cy="21.1039"
                rx="21.035"
                ry="21.1039"
                fill="white"
              />
              <g filter="url(#filter2_b_1269_606)">
                <rect
                  x="11.1565"
                  y="63.3651"
                  width="63.5459"
                  height="95.4784"
                  rx="31.7729"
                  stroke="url(#paint2_linear_1269_606)"
                  stroke-width="22.3129"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_1269_606"
                  x="116.662"
                  y="54.7224"
                  width="87.2204"
                  height="112.766"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="4.63334"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1269_606"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1269_606"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_b_1269_606"
                  x="55.7445"
                  y="47.6733"
                  width="98.1229"
                  height="126.862"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="5.2125"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1269_606"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1269_606"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_b_1269_606"
                  x="-11.5833"
                  y="40.6253"
                  width="109.025"
                  height="140.958"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="5.79167"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1269_606"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1269_606"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1269_606"
                  x1="160.272"
                  y1="63.989"
                  x2="160.272"
                  y2="158.222"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0.5" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1269_606"
                  x1="104.806"
                  y1="58.0983"
                  x2="104.806"
                  y2="164.11"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0.5" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1269_606"
                  x1="42.9294"
                  y1="52.2086"
                  x2="42.9294"
                  y2="170"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-full lg:w-[910px] flex flex-col justify-center items-center">
            <p className="text-4xl lg:text-[90px] text-white font-bold leading-[120%] text-center">Building the modern <span className="text-gradient">HRMS</span> Saas Platform</p>
            <p className="text-[#A5A9AE] text-xl font-normal w-full lg:w-[807px] text-center">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
