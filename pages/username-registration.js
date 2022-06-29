import Image from "next/image";
import Link from "next/link";
import Nav from "../comps/Nav";

export default function Home() {
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
              <div className="number-line" />
              <div className="number">
                <div>2</div>
              </div>
              <div className="number-line" />
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
            <div className="title-text">Welcome! First thing first...</div>
          </div>
          <div className="sub-text">Think of a unique username.</div>

          <form className="form-registration" action="/phone-number" id="username-reg">
            <label className="text-input-heading" htmlFor="#username-reg">
              Enter the username
            </label>
            <input
              className="text-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g Job24"
              pattern="[a-z]{3}[a-z,0-9]{0-7}"
              minLength={4}
            />
            <input className="link-block" type="submit" defaultValue="Next" />
            <div className="text-link-div">
              <Link href="/forgot-nickname">
                <a className="text-link">Forgot Username?</a>
              </Link>
              <Link href="/delete-nickname">
                <a className="text-link">Delete Username?</a>
              </Link>
            </div>
          </form>

          {/* <div className="form-registration">
            <div className="text-input-heading">Enter the Username</div>
            <input
              type="text"
              className="text-input w-input"
              maxLength={256}
              name="name-3"
              data-name="Name 3"
              placeholder=""
              id="name-3"
            />
            <Link href="/phone-number">
              <a className="link-block form-submit w-inline-block">
                <div>Next</div>
              </a>
            </Link>
            
          </div> */}
        </div>
      </div>
      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img2.png" alt="" width={450} height={550} />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
      </div>
    </div>
  );
}
