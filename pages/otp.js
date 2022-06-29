import Link from "next/link";
import Nav from "../comps/Nav";
import Image from "next/image";
import React, { Component } from "react";
import OtpInput from "react-otp-input";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

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

          <form className="form-registration">
            <div className="text-input-heading">Enter your OTP</div>

            <OtpInput
              numInputs={4}
              inputStyle={{
                border: "1px solid #4d4d4d",
                borderRadius: "8px",
                width: "60px",
                height: "48px",
                color: "#000000",
                fontWeight: "400",
                caretColor: "#f7931e",
                fontSize: "16px",
                fontFamily: "Product Sans",
                fontWeight: "400",
                margin: "7px 20px 16px 0",
              }}
              focusStyle={{
                border: "1px solid #f7931e",
                outline: "none",
              }}
            />

            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="link-block form-submit"
            >
              Next
            </Button> */}
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
