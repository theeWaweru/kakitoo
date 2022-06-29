import OtpInput from "react-otp-input";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  return (
    <div className="App">
      <OtpInput
        value={code}
        onChange={handleChange}
        numInputs={4}
        separator={<span style={{ width: "8px" }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          border: "1px solid #4d4d4d",
          borderRadius: "8px",
          width: "60px",
          height: "48px",
          color: "#f7931e",
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
    </div>
  );
}
