import Link from "next/link";

const privacyPolicy = () => {
  return (
    <div className="tos-body">
      <div className="terms-of-service">
        <div className="kakitoo-svg-logo w-embed">
          <svg
            width={245}
            height={44}
            viewBox="0 0 245 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_996_1503)">
              <path
                d="M245 24.0358C243.297 30.2503 238.589 32.8906 232.821 34.0658C226.169 35.4343 219.549 35.2733 213.17 32.7135C209.748 31.345 207.113 29.1233 206.326 25.3077C205.362 20.6871 207.113 16.5496 211.146 13.8448C213.813 12.0578 216.818 11.124 219.967 10.6571C224.916 9.93266 229.849 10.0454 234.717 11.2689C239.65 12.5086 243.635 14.8752 245 20.2364C245 21.5082 245 22.764 245 24.0358ZM225.494 18.9806C224.112 19.3831 222.602 19.5924 221.333 20.2525C219.405 21.2667 219.356 23.6495 221.044 24.8086C223.1 26.2254 227.904 26.1771 229.961 24.7442C231.809 23.4563 231.696 20.9769 229.624 20.0754C228.387 19.528 226.989 19.3509 225.494 18.9806Z"
                fill="black"
              />
              <path
                d="M0.00044268 34.0681C0.353932 31.5405 0.755624 28.9967 1.07698 26.4691C1.75182 21.2368 2.39453 16.0044 3.0533 10.6755C7.2309 10.6755 11.3603 10.6755 15.6343 10.6755C15.2487 13.9115 14.863 17.0992 14.4292 20.7055C15.6986 19.5302 16.7108 18.6125 17.691 17.6788C19.9886 15.5214 22.2702 13.3319 24.584 11.1907C24.9214 10.8848 25.4195 10.6111 25.8533 10.6111C30.2559 10.5628 34.6745 10.5789 39.2699 10.8526C35.0441 14.5555 30.8022 18.2745 26.496 22.0417C29.8703 26.3564 33.2284 30.6228 36.7151 35.0663C36.1527 35.0985 35.7671 35.1468 35.3975 35.1468C31.477 35.1468 27.5565 35.1146 23.636 35.179C22.7362 35.1951 22.1578 34.9214 21.6275 34.1808C19.4584 31.1863 17.225 28.2401 15.0077 25.2777C14.7345 24.9236 14.4614 24.5694 13.9793 23.9415C13.4973 27.8215 13.0474 31.4117 12.5814 35.1307C8.33957 35.1307 4.16197 35.1307 -0.015625 35.1307C0.00044268 34.7765 0.00044268 34.4223 0.00044268 34.0681Z"
                fill="black"
              />
              <path
                d="M184.554 34.8543C180.119 34.7577 175.781 34.2426 171.668 32.3428C163.409 28.5272 163.795 18.2396 170.495 13.8928C174.415 11.349 178.786 10.4475 183.333 10.2865C188.458 10.0933 193.52 10.4636 198.228 12.7819C201.779 14.5206 204.124 17.1932 204.398 21.3146C204.687 25.6937 202.775 28.9941 199.192 31.3446C195.127 34.0011 190.499 34.6611 185.775 34.8543C185.374 34.8704 184.972 34.8543 184.554 34.8543ZM185.116 26.0962C186.434 25.6776 188.025 25.42 189.358 24.7116C191.061 23.8101 191.126 21.5239 189.68 20.397C187.735 18.8836 182.513 18.8675 180.537 20.3648C178.673 21.7815 178.898 24.2126 181.067 25.098C182.256 25.581 183.574 25.7259 185.116 26.0962Z"
                fill="black"
              />
              <path
                d="M71.6783 35.112C67.4846 35.112 63.4516 35.112 59.274 35.112C59.3544 34.13 59.4187 33.2123 59.5151 32.0692C56.8157 34.1622 53.8753 35.1764 50.726 35.5628C47.8017 35.917 44.8774 35.9331 42.0334 34.9993C39.1734 34.0656 37.1006 32.4073 36.8114 29.1552C36.5704 26.3217 38.129 23.5687 41.1497 22.2968C46.8055 19.898 52.4613 20.1395 57.9404 22.9891C58.4064 23.2306 58.8241 23.6009 59.2419 23.9551C59.6115 24.261 59.9489 24.6152 60.3024 24.9693C60.8326 22.973 60.1578 21.2021 58.3903 19.9463C56.6389 18.6905 54.6305 18.2719 52.5417 18.1109C47.8981 17.7729 43.367 18.2075 39.1412 20.3971C39.0448 20.4454 38.9002 20.4293 38.6913 20.4615C38.9484 18.2719 39.1734 16.1146 39.5108 13.9895C39.5751 13.587 40.0892 13.1362 40.507 12.9108C44.2508 10.9467 48.348 10.351 52.4935 10.0612C56.4301 9.78749 60.3345 10.029 64.1425 11.0755C69.7823 12.621 73.9278 16.2756 72.9958 23.7297C72.5781 27.4648 72.1443 31.2321 71.6783 35.112ZM60.0132 28.2697C58.1011 25.9675 52.8791 24.9854 50.4207 26.531C49.8905 26.8691 49.3281 27.6419 49.3442 28.2053C49.3603 28.7527 49.9709 29.4933 50.5172 29.7992C52.9755 31.1999 57.8601 30.3788 60.0132 28.2697Z"
                fill="black"
              />
              <path
                d="M88.6777 23.9716C88.1956 27.8355 87.7457 31.4257 87.2958 35.0803C83.0861 35.0803 78.9567 35.0803 74.7148 35.0803C75.2611 30.5885 75.8074 26.1772 76.3537 21.7499C76.7715 18.3851 77.1732 15.0364 77.6392 11.6877C77.7034 11.2852 78.1694 10.6251 78.4586 10.6251C82.3631 10.5607 86.2836 10.5768 90.3487 10.5768C89.947 13.9255 89.5614 17.1132 89.1436 20.7195C90.8307 19.1578 92.2286 17.8538 93.6265 16.5336C95.4904 14.7627 97.3381 12.9756 99.2341 11.2369C99.5876 10.8988 100.15 10.609 100.616 10.609C104.89 10.5607 109.18 10.5768 113.872 10.5768C109.517 14.5212 105.404 18.2402 101.21 22.0397C104.617 26.3704 107.959 30.6529 111.494 35.1608C109.887 35.1608 108.553 35.1608 107.22 35.1608C104.295 35.1608 101.355 35.1286 98.4307 35.1769C97.4827 35.193 96.8722 34.9193 96.3098 34.1465C94.1728 31.1842 91.9555 28.2702 89.7703 25.3562C89.481 24.9376 89.1597 24.5834 88.6777 23.9716Z"
                fill="black"
              />
              <path
                d="M135.997 35.0966C137.235 29.7999 138.424 24.7124 139.661 19.464C134.037 19.464 128.574 19.464 122.87 19.464C124.091 16.4856 125.2 13.6843 126.421 10.9474C126.55 10.6415 127.321 10.4966 127.803 10.4966C139.693 10.4805 151.599 10.4805 163.489 10.4805C164.566 10.4805 165.642 10.4805 166.896 10.4805C165.69 13.4106 164.566 16.1958 163.361 18.9327C163.232 19.2225 162.573 19.3996 162.156 19.4157C159.456 19.464 156.757 19.4318 153.929 19.4318C153.19 22.5551 152.451 25.6623 151.728 28.7534C151.294 30.5888 150.876 32.4402 150.378 34.2756C150.298 34.5976 149.848 35.0483 149.559 35.0483C145.076 35.1127 140.625 35.0966 135.997 35.0966Z"
                fill="black"
              />
              <path
                d="M128.43 0.112697C125.425 7.32528 122.437 14.5379 119.319 22.0242C123.963 22.0242 128.398 22.0242 132.848 22.0242C132.881 22.1368 132.913 22.2495 132.929 22.3461C125.12 29.5748 117.295 36.7874 109.486 44C109.422 43.9517 109.357 43.9195 109.293 43.8712C112.282 36.6586 115.286 29.4621 118.371 22.0402C113.696 22.0402 109.261 22.0402 104.393 22.0402C112.539 14.5057 120.396 7.24479 128.253 0C128.301 0.032199 128.366 0.0804976 128.43 0.112697Z"
                fill="#F7931F"
              />
            </g>
            <defs>
              <clipPath id="clip0_996_1503">
                <rect width={245} height={44} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="tos-title">Privacy Policy</div>
        <p className="tos-text">
          <span className="bolded">Introduction</span>
          <br />
          <span className="bolded">Kakitoo Services Limited</span> is committed
          to respecting and protecting your privacy in accordance with
          applicable data use and privacy laws and obligations. This Policy
          applies to all customers.
        </p>
        <div className="tos-points">Definitions 2.0</div>
        <p className="tos-text">
          "Customer" or "you" refers to you, the person who subscribes to, uses,
          or purchases any of our services or accesses our websites, as well as
          any other person who accesses any of the services to which you have
          subscribed. "Kakitoo," "we," "us," "our," and "ours" refer to Kakitoo
          Services Limited.
          <br />
          <br />
          The word "includes" implies that what follows is not necessarily
          exhaustive, and thus the examples provided are not the only
          things/situations included in the text's meaning or explanation.
        </p>
        <div className="tos-points">3.0 Statement Specifics</div>
        <div className="tos-points">3.1 Information Gathering</div>
        <p className="tos-text">
          3.1.1 With your knowledge and consent, Kakitoo collects your personal
          information when you:
          <br />
          a) Sign up for a specific service
          <br />
          b) Purchase or use a Kakitoo service online, on Whatsapp, on Kakitoo
          mobile App, or on USSD;
          <br />
          c) Subscribe to Kakitoo or third-party premium rate services, SMS,
          email, or social media platforms;
          <br />
          d) Enquire with Kakitoo about a service or contact Kakitoo with a
          question or complaint;
          <br />
          e) Respond to or take part in a survey, marketing promotion, prize
          draw, or special offer
          <br />
          f) Kakitoo or third-party websites may be visited, accessed, or used.
          <br />
          g) Kakitoo may also obtain information about you from third-party
          sources such as credit bureaus, fraud prevention agencies, and
          business directories.
          <br />
          <br />
          3.1.2 If you allow a child to use our services, you should be aware
          that personal information about them may be collected in the manner
          described in this statement.
        </p>
        <div className="tos-points">
          3.2 Type of customer information we gathered
        </div>
        <p className="tos-text">
          We collect and store information about you ("Customer Information")
          based on the Kakitoo and third-party products and services you use and
          subscribe to. The Customer Information includes, but is not limited
          to:
          <br />
          <br />
          3.2.1 Your personal information, which includes your name, address,
          phone number, identity document type and number, date of birth, email
          address, and mobile number portability records.
          <br />
          <br />
          3.2.2 Your preferences for specific products and services based on
          information provided by you or your use of Kakitoo's (or a third
          party's) network, products, and services.
          <br />
          <br />
          3.2.3 Your interactions with us, such as when you call us or interact
          with us via social media, or email (we may record your conversations,
          social media, or other interactions with us).
          <br />
          <br />
          3.2.4 Your mobile money transactions through our service.
        </p>
        <div className="tos-points">3.3 Information Utilization</div>
        <p className="tos-text">
          Your Customer Information may be used and analysed for the following
          purposes:
          <br />
          <br />
          3.3.1 Processing goods and services purchased from Kakitoo or third
          parties via our ecommerce platforms;
          <br />
          <br />
          3.3.2 Charging you for the use of our or a third-products party's or
          services
          <br />
          <br />
          3.3.3 Responding to any questions or concerns you may have;
          <br />
          <br />
          3.3.4 Verifying your identity information in publicly accessible
          and/or restricted government databases in order to meet regulatory
          requirements;
          <br />
          <br />
          3.3.5 Conducting a credit check;
          <br />
          <br />
          3.3.6 Keeping you updated on new products and services in general, as
          well as contacting you with offers or promotions based on how you use
          our or third-party products and services, unless you opt out of
          receiving such marketing messages (you may contact Kakitoo at any time
          to opt out of receiving marketing messages);
          <br />
          <br />
          3.3.7 Using the Kakitoo telephone directory enquiry service, either in
          print or electronically;
          <br />
          <br />
          3.3.8 to comply with any legal, governmental, or regulatory
          requirement, or for use by our lawyers in any legal proceedings;
          <br />
          <br />
          3.3.9 In business practises, such as quality control, training, and
          ensuring that systems operate effectively;
          <br />
          <br />
          3.3.10 To comprehend how you use our services in the development or
          improvement of products and services;
          <br />
          <br />
          3.3.11 Preventing and detecting fraud or other crimes, as well as debt
          collection;
          <br />
          <br />
          3.3.12 For the purposes of research, statistics, and other scientific
          or commercial endeavours;
          <br />
          <br />
          3.3.13 Provide aggregated data to third parties (data that does not
          contain any information that could be used to identify you as an
          individual);
        </p>
        <div className="tos-points">3.4 Information Retention</div>
        <p className="tos-text">
          Kakitoo will keep your information for as long as the law or
          regulations require. If no statutory or regulatory requirement exists,
          Kakitoo will only keep Customer Information for as long as it is
          required.
        </p>
        <div className="tos-points">3.5 Information Disclosure</div>
        <p className="tos-text">
          3.5.1 All disclosures of your information must be made in accordance
          with applicable laws and regulations. Kakitoo shall evaluate and
          review each request for information and may refuse to provide such
          information to the requesting party.
          <br />
          <br />
          3.5.2 We may disclose your information to the following parties:
          <br />
          a) In response to a demand issued with the appropriate lawful mandate
          and where the form and scope of the demand is compliant with the law,
          law-enforcement agencies, regulatory authorities, courts, or other
          public authorities
          <br />
          b) Subsidiaries, affiliates, partners, or agents involved in the
          delivery of Kakitoo services that you order or use;
          <br />
          c) Credit-reference bureaus, fraud-prevention bureaus,
          business-scoring bureaus, or other credit-scoring bureaus;
          <br />
          d) Debt-collection agencies or other debt-recovery organisations; or
          public and/or restricted government databases used to verify your
          identity information in order to comply with regulatory requirements.
          <br />
          e) When you make an emergency call (or where such disclosure to
          emergency service providers is necessary for your rescue, health, and
          safety), emergency service providers will know your approximate
          location.
          <br />
          <br />
          3.5.3 Some of your information may be shared with anyone from whom you
          receive mobile money, or to whom you send or intend to send mobile
          money. Any third party involved in the operation of the mobile money
          service and M-PESA money transfer technology platform, may have access
          to your information.
          <br />
          <br />
          3.5.4 We will not disclose any information to any individual or entity
          acting outside of its legal authority.
        </p>
        <div className="tos-points">3.6 Cookies and Their Use</div>
        <p className="tos-text">
          3.6.1 When you visit our websites, we may store some information (via
          "cookies") on your computer. This allows us to recognise you on future
          visits. The information gathered is non-personal (for example, your
          computer's IP address, the date and time of your visit, which pages
          you browsed, and whether the pages were successfully delivered).
          <br />
          <br />
          3.6.2 We may also use this data in aggregate to create customised
          services based on your specific interests and needs. If you prefer,
          you can choose to be prompted before accepting any cookies, or to
          prevent your browser from accepting any cookies at all (depending on
          the browser you're using). Certain features of the website will,
          however, be inaccessible as a result of this.
        </p>
        <div className="tos-points">3.7 The Application of Hyperlinks</div>
        <p className="tos-text">
          3.7.1 Our websites may contain links to other places or websites on
          the Internet. These hyperlinks lead to websites published or operated
          by third parties who are not affiliated with or in any way related to
          us and have been included in our website to enhance your user
          experience and are provided solely for informational purposes. For
          your convenience, we make every effort to direct you to reputable
          websites and information sources.
          <br />
          <br />
          3.7.2 By providing hyperlinks to an external website or webpage, we do
          not endorse, recommend, approve, or guarantee any third-party products
          or services, and we have no collaboration with such third parties
          unless otherwise disclosed. We are not responsible in any way for the
          content of any externally linked website or webpage.
          <br />
          <br />
          3.7.3 By clicking on a hyperlink, you will leave the Kakitoo webpage
          and will be subject to the terms of service and privacy policies of
          the other website you choose to visit.
        </p>
        <div className="tos-points">
          3.8 Information Security and Protection
        </div>
        <p className="tos-text">
          Kakitoo has put processes, resources, controls, tools, and other
          safeguards in place to protect your data from unauthorised access,
          accidental loss, or destruction.
        </p>
        <div className="tos-points">
          3.9 Failure to Comply with this Statement
        </div>
        <p className="tos-text">
          Kakitoo reserves the right to terminate any agreement with you if you
          fail to comply with the provisions of this statement and to reject any
          application for information that violates this statement.
        </p>
        <div className="tos-points">3.10 Modifications to this Statement</div>
        <p className="tos-text">
          Kakitoo reserves the right, at any time, to amend or modify this
          statement. If Kakitoo modifies this statement, any changes will be
          posted on the Kakitoo website so that you are always aware of how your
          personal information is being used or shared.
        </p>
      </div>
    </div>
  );
};

export default privacyPolicy;
