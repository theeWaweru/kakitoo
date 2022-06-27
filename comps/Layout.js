import Footer from "./Footer";
import Nav from "./Nav";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="body">
      {/* <Nav /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
