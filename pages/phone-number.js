import Link from "next/link";
import Nav from "../comps/Nav";

const phoneNumber = () => {
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
              <div className="number-line" />
              <div className="number">
                <div>3</div>
              </div>
              <div className="number-line" />
            </div>
            <div className="number-div">
              <div className="number-line" />
              <div className="number">
                <div>4</div>
              </div>
            </div>
          </div>
          <div className="title-div">
            <div className="title-text">We need your phone number</div>
          </div>
          <div className="sub-text">It links with your username</div>
          <div className="form-registration">
            <div className="text-input-heading">Enter your phone number</div>
            <input
              type="text"
              className="text-input w-input"
              maxLength={256}
              name="name-3"
              data-name="Name 3"
              placeholder=""
              id="name-3"
            />
            <label className="radio-button-field w-radio">
              <input
                type="radio"
                data-name="Radio"
                id="radio"
                name="radio"
                defaultValue="Radio"
                className="w-form-formradioinput radio-circle w-radio-input"
              />
              <span className="radio-button-label w-form-label" htmlFor="radio">
                Agree to
              </span>
              <Link href="/terms-of-service">
                <a className="text-link">Terms of Service</a>
              </Link>
            </label>
            <Link href="/otp">
              <a className="link-block form-submit w-inline-block">
                <div>Next</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="pic-div">
        <div className="hue-overlay" />
        <div className="black-overlay" />
        <img src="images/img3.png" loading="lazy" alt="" className="bg-img" />
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

export default phoneNumber;
