import OtpInput from "react-otp-input";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <OtpInput
        value={code}
        onChange={handleChange}
        numInputs={6}
        separator={<span style={{ width: "8px" }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          border: "1px solid #4d4d4d",
          borderRadius: "8px",
          width: "60px",
          height: "48px",
          color: "red",
          fontWeight: "400",
          caretColor: "#f7931e",
          fontSize: "16px",
          fontFamily:'Product Sans',
          fontWeight: "400",
        }}
        focusStyle={{
          border: "1px solid #f7931e",
          outline: "none",
        }}
      />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
