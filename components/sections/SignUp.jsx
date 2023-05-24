import Link from "next/link";
import React, { useState } from "react";
import Field from "../common/Field";
import PasswordField from "../common/PasswordField";

const SignUpSection = () => {
  const [CouponCode, setCouponCode] = useState("");
  const [ErrorCouponCode, setErrorCouponCode] = useState("");
  const [ErrorCouponCodeState, setErrorCouponCodeState] = useState(false);

  return (
    <section className="w-6/12  mx-auto my-24 rounded-3xl border-2 border-grey">
      <div className="w-2/3  mx-auto py-28">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-black text-3xl">Welcome back</h2>
            <p className="text-black">Let log you in!</p>
          </div>
          <div className="flex flex-col gap-8">
            <PasswordField
              id="Coupoun"
              name="Code"
              placeholder="Password"
              setstate={(e) => setCouponCode(e)}
              error="This id comming from the fetch response error"
              errorState={ErrorCouponCodeState}
            />

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

export default SignUpSection;
