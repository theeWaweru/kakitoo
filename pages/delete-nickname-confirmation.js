import Nav from "../comps/Nav";
import Link from "next/link";

const deleteNicknameConfirmation = () => {
  return (
    <div className="body-div">
      <div className="details-div">
        <div className="details-div-holder">
          <Nav />
          <div className="title-div with-margin">
            <div className="title-text">
              Your Username is{" "}
              <span className="title-text username">xxxxxxx</span>
            </div>
          </div>
          <div className="sub-text">Are you sure you want to delete</div>
          <div className="delete-name-form">
            <Link href="/username-registration">
              <a className="link-block no-btn w-inline-block">
                <div>No</div>
              </a>
            </Link>
            <Link href="delete-nickname-finish">
              <a className="link-block yes-btn w-inline-block">
                <div>Yes</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="pic-div">
        <div className="hue-overlay" />
        <div className="black-overlay" />
        <img src="images/img11.png" loading="lazy" alt="" className="bg-img" />
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

export default deleteNicknameConfirmation;
