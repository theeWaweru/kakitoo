import Link from "next/link";
import Nav from "../comps/Nav";
import Bolt from "../comps/Bolt";
import Image from "next/image";

const forgotNickname = () => {
  return (
    <div className="body-div">
      <div className="details-div">
        <div className="details-div-holder">
          <Nav />
          <div className="title-div with-margin">
            <div className="title-text">Have forgotten your Username?</div>
          </div>
          <div className="sub-text">Don&apos;t worry we&apos;ve got you</div>
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
            <Link href="/forgot-nickname-otp">
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
        <div className="bg-img">
          <Image src="/img6.png" alt="" width={450} height={550} />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
        <Bolt className="kakitoo-bolt w-embed" />
      </div>
    </div>
  );
};

export default forgotNickname;
