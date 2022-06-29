import Image from "next/image";
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
          <div className="w-form form-registration">
            <form
              id="phone-registration-form"
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
                id="phone-number"
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

          {/* this is a line break  */}

          {/* <form className="form-registration">
            <div className="text-input-heading">Enter your phone number</div>
            <input
              className="text-input w-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g 0712345678"
              pattern="[0-9]{10}"
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
          </form> */}

          {/* this above is a deletable form */}
        </div>
      </div>
      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img3.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
      </div>
    </div>
  );
};

export default phoneNumber;
