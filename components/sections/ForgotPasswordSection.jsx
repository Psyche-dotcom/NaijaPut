import Link from "next/link";
import React, { useState } from "react";
import Field from "../common/Field";

const ForgotPasswordSection = () => {
  const [RegisteredEmail, setRegisteredEmail] = useState("");
  const [ErrorRegisteredEmail, setErrorRegisteredEmail] = useState("");
  const [ErrorRegisteredEmailState, setErrorRegisteredEmailState] =
    useState(false);
  return (
    <section className="w-6/12  mx-auto my-24 rounded-3xl border-2 border-grey">
      <div className="w-2/3  mx-auto py-28">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-black text-3xl">Forget password?</h2>
            <p className="text-black">Enter your mail address</p>
          </div>
          <div className="flex flex-col gap-8">
            <Field
              id="recover"
              type="email"
              name="Email"
              placeholder="Enter your registered email here "
              setstate={(e) => setRegisteredEmail(e)}
              error="This id comming from the fetch response error"
              errorState={ErrorRegisteredEmailState}
            />

            <Link
              href="/submit_recover"
              className="w-full"
              style={{ width: "100%" }}
            >
              <span
                className="text-white bg-main_projcolor font-body_text font-semibold  rounded-full text-center block  py-4  hover:bg-btn_colorh w-full"
                style={{ width: "100%" }}
                aria-label="login to dashboard"
              >
                Recover My Password
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordSection;
