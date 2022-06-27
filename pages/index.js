import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import kakitooLogo from "../comps/Logo";
import Nav from "../comps/Nav";

export default function Home() {
  return (
    <div className="body-div">
      <div className="deets-div">
        <Nav />
        <div className="main-text">
          Provides <span className="colored-text">privacy as a service</span> to
          Mpesa customers
        </div>
        <div className="sec-text">
          The safest way to send Mpesa to someone and hide your mobile number
          and name.
        </div>
        <div className="div-block">
          <img
            src="images/phone-with-number.png"
            loading="lazy"
            alt=""
            className="phone-img"
          />
          <div>
            <div className="title-text">Call *384*6#</div>
            <div className="sec-text">
              To tip or send someone Mpesa and hide your number and name.
            </div>
          </div>
        </div>
      </div>
      <div className="pic-div">
        <div className="black-overlay" />
        <img src="images/img1.png" loading="lazy" alt="" className="bg-img" />
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
        <Link href="/username-registration">
          <a className="link-block w-inline-block">
            <div>Get a Username</div>
          </a>
        </Link>
      </div>
    </div>
  );
}
