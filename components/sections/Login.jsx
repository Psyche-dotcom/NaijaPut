import Link from "next/link";
import React, { useState } from "react";
import Field from "../common/Field";
import PasswordField from "../common/PasswordField";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [ErrorEmail, setErrorEmail] = useState("");
  const [ErrorEmailState, setErrorEmailState] = useState(false);
  const [Password, setPassword] = useState("");
  const [ErrorPassword, setErrorPassword] = useState("");
  const [ErrorPasswordState, setErrorPasswordState] = useState(false);

  return (
    <section className="w-6/12  mx-auto my-24 rounded-3xl border-2 border-grey">
      <div className="w-2/3  mx-auto py-28">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-black text-3xl">Welcome back</h2>
            <p className="text-black">Let log you in!</p>
          </div>
          <div className="flex flex-col gap-8">
            <Field
              id="email"
              name="Email"
              placeholder="Email"
              type="email"
              setstate={(e) => setEmail(e)}
              error="This id comming from the fetch response error"
              errorState={ErrorEmailState}
            />
            <PasswordField
              id="password"
              name="Password"
              placeholder="Password"
              setstate={(e) => setPassword(e)}
              error="This id comming from the fetch response error"
              errorState={ErrorPasswordState}
            />

            <Link href="/login/forgot_password">
              <span className=" text-main_projcolor">Forget Password?</span>
            </Link>
            <Link
              href="/dashboard"
              className="w-full"
              style={{ width: "100%" }}
            >
              <span
                className="text-white bg-main_projcolor font-body_text font-semibold  rounded-full text-center block  py-4  hover:bg-btn_colorh w-full"
                style={{ width: "100%" }}
                aria-label="login to dashboard"
              >
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
