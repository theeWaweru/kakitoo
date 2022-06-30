import Link from "next/link";
import Nav from "../comps/Nav";
import Image from "next/image";

const deleteNickname = () => {
  return (
    <div className="body-div">
      <div className="details-div">
        <div className="details-div-holder">
          <Nav />
          <div className="title-div with-margin">
            <div className="title-text">
              You want to delete your{" "}
              <span className="title-text username">Username</span>?
            </div>
          </div>
          <div className="sub-text">Don&apos;t worry we&apos;ve got you</div>
          <div className="w-form form-registration">
            <form
              id="phone-deregistration-form"
              name="Phone-Deregistration-Form"
              data-name="Phone Deregistration Form"
              method="post"
              action="/delete-nickname-otp"
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
          <Image src="/img9.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
      </div>
    </div>
  );
};

export default deleteNickname;
