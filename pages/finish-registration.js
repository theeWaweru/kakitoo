import Link from "next/link";
import Nav from "../comps/Nav";

const finishRegistration = () => {
  return (
    <div className="body-div">
      <div className="details-div">
        <div className="details-div-holder">
          <Nav />
          <div className="process-timeline">
            <div className="number-div">
              <div className="number current">
                <div>1</div>
              </div>
              <div className="number-line current" />
            </div>
            <div className="number-div">
              <div className="number-line current" />
              <div className="number current">
                <div>2</div>
              </div>
              <div className="number-line current" />
            </div>
            <div className="number-div">
              <div className="number-line current" />
              <div className="number current">
                <div>3</div>
              </div>
              <div className="number-line current" />
            </div>
            <div className="number-div">
              <div className="number-line current" />
              <div className="number current">
                <div>4</div>
              </div>
            </div>
          </div>
          <div className="congrats-svg w-embed">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_996_1158)">
                <path
                  d="M37.05 74.1C57.5121 74.1 74.1 57.5121 74.1 37.05C74.1 16.5878 57.5121 0 37.05 0C16.5878 0 0 16.5878 0 37.05C0 57.5121 16.5878 74.1 37.05 74.1Z"
                  fill="#F7931E"
                />
                <path
                  d="M50.4801 29.7086C44.3301 35.7486 38.1901 41.7886 32.0401 47.8286C31.9801 47.8886 31.9401 47.9686 31.8801 48.0286C31.8501 48.0286 31.8201 48.0286 31.7901 48.0286C29.6001 45.8686 27.4001 43.7086 25.2101 41.5386C24.6401 40.9686 24.1001 40.3786 23.6201 39.8686C24.8101 38.6186 26.0501 37.3286 27.3701 35.9386C28.9001 37.5586 30.4001 39.1386 31.9301 40.7586C36.9701 35.8086 41.8801 30.9786 46.8801 26.0586C47.1601 26.3686 47.4201 26.6786 47.7001 26.9586C48.5001 27.7486 49.3001 28.5386 50.1101 29.3286C50.2201 29.4386 50.3501 29.5286 50.4801 29.6186C50.4801 29.6486 50.4801 29.6786 50.4801 29.7086Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_996_1158">
                  <rect width="74.1" height="74.1" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="title-div">
            <div className="title-text">Congratulations!</div>
            <div className="title-text username">Username</div>
          </div>
          <div className="div-block-7">
            <div className="sub-text">People can send you Mpesa by...</div>
            <div className="sub-text bolded">*609#</div>
            <div className="sub-text">Send to... Username</div>
          </div>
        </div>
      </div>
      <div className="pic-div">
        <div className="hue-overlay" />
        <div className="black-overlay" />
        <img src="images/img5.png" loading="lazy" alt="" className="bg-img" />
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
        <div className="kakitoo-bolt w-embed">
          <svg
            width={205}
            height={249}
            viewBox="0 0 205 249"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_996_1625)">
              <path
                d="M205 98.8765H133.717L191.533 0H86.2787L28.5469 99.8479L0 149.219H68.8315H74.6584L30.5955 249L205 98.8765Z"
                fill="black"
                fillOpacity="0.1"
              />
              <path
                d="M68.8315 148.219H1.73334L29.4126 100.348L28.5469 99.8479L29.4126 100.348L86.8556 1H189.789L132.854 98.3717L131.974 99.8765H133.717H202.305L33.299 245.353L75.5732 149.623L76.1932 148.219H74.6584H68.8315Z"
                stroke="#F7931E"
                strokeWidth={2}
              />
            </g>
            <defs>
              <filter
                id="filter0_b_996_1625"
                x={-15}
                y={-15}
                width={235}
                height={279}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix">
                  <feGaussianBlur in="BackgroundImage" stdDeviation="7.5">
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_996_1625"
                    >
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_996_1625"
                        result="shape"
                      ></feBlend>
                    </feComposite>
                  </feGaussianBlur>
                </feFlood>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default finishRegistration;
