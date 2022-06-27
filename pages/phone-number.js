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

          <form className="form-registration" action="/otp">
            <label className="text-input-heading" htmlFor="phone">
              Enter the phone number
            </label>
            <input
              className="text-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="0702072330"
              pattern="[0,7]{2}[0-9]{8}"
            />
            <input className="link-block" type="submit" defaultValue="Next" />
          </form>

          {/* <div className="form-registration">
            <div className="text-input-heading">Enter your phone number</div>
            <input
              type="number"
              className="text-input w-input"
              maxLength={10}
              name="phone-number"
              data-name="Phone Number 3"
              placeholder="0712 345678"
              id="name-3"
              minLength={10}
              min="1"
              max="5"
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
          </div> */}
        </div>
      </div>
      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img3.png" alt="" width={450} height={550} />
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
