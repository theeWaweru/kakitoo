import Link from "next/link";
import Nav from "../comps/Nav";
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

          <div className="w-form form-registration">
            <form
              id="forgot-phone-registration-form"
              name="Phone-Registration-Form"
              data-name="Phone Registration Form"
              method="post"
              action="/otp"
            >
              <label className="text-input-heading" htmlFor="phone-number">
                Enter your phone number
              </label>
              <input
                type="number"
                maxLength={10}
                minLength={10}
                name="User Phone Number"
                data-name="phone-number"
                id="forgot-phone-number"
                className="text-input w-input"
                placeholder="e.g 0702123456"
                pattern="[0-9]{2}[0-9]{8}"
                required=""
                autoFocus="true"
              />
              <label
                className="radio-button-field w-radio"
                htmlFor="terms-of-service-radio"
              >
                <input
                  className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"
                  type="radio"
                  name="term-of-service"
                  id="terms-of-service-radio"
                  defaultValue="Radio"
                  data-name="term-of-service"
                  required=""
                />
                <span className="w-form-label" htmlFor="Terms-of-Service">
                  Agree to{" "}
                </span>
                <Link href="/terms-of-service">
                  <a className="text-link">Terms of Service</a>
                </Link>
              </label>
              <input
                type="submit"
                defaultValue="Next"
                data-wait="Please wait..."
                className="submit-button w-button link-block form-submit"
              />
            </form>
            <div className="success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail">
              <div>
                Oops! Something went wrong.
                <br />
                Check your details and try again.
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img6.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
      </div>
    </div>
  );
};

export default forgotNickname;
