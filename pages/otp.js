import Link from "next/link";
import Nav from "../comps/Nav";
import Image from "next/image";

const otp = () => {
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
              <div className="number-line" />
              <div className="number">
                <div>4</div>
              </div>
            </div>
          </div>
          <div className="title-div">
            <div className="title-text">You will receive an SMS</div>
          </div>
          <div className="sub-text">It&apos;s to confirm your number</div>
          <div className="form-registration">
            <div className="text-input-heading">Enter your OTP</div>
            <div className="numerical-text-div">
              <input
                type="text"
                className="numerical-text-field w-input"
                maxLength={256}
                name="name-3"
                data-name="Name 3"
                placeholder=""
                id="name-3"
              />
              <input
                type="text"
                className="numerical-text-field w-input"
                maxLength={256}
                name="name-3"
                data-name="Name 3"
                placeholder=""
                id="name-3"
              />
              <input
                type="text"
                className="numerical-text-field w-input"
                maxLength={256}
                name="name-3"
                data-name="Name 3"
                placeholder=""
                id="name-3"
              />
              <input
                type="text"
                className="numerical-text-field w-input"
                maxLength={256}
                name="name-3"
                data-name="Name 3"
                placeholder=""
                id="name-3"
              />
            </div>
            <Link href="/finish-registration">
              <a className="link-block form-submit w-inline-block">
                <div>Next</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img4.png" alt="" width={450} height={550} />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
      </div>
    </div>
  );
};

export default otp;
