import Link from "next/link";
import Nav from "../comps/Nav";
import Image from "next/image";
import App from "./otp-app";

const forgotNicknameotp = () => {
  return (
    <div className="body-div">
      <div className="details-div">
        <div className="details-div-holder">
          <Nav />
          <div className="title-div with-margin">
            <div className="title-text">You will receive an SMS</div>
          </div>
          <div className="sub-text">It&apos;s to confirm your number</div>

          {/* below is the otp app */}
          <form id="forgot-nickname-otp" className="form-registration">
            <div className="text-input-heading">Enter your OTP</div>
            
            {/* this is the OTP app below */}
            <App />

            <Link href="/finish-registration">
              <a className="link-block form-submit w-inline-block">
                <div>Next</div>
              </a>
            </Link>
          </form>
          
        </div>
      </div>
      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img7.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
      </div>
    </div>
  );
};

export default forgotNicknameotp;
