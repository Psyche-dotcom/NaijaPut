import Link from "next/link";
import React, { useState } from "react";
import Field from "../common/Field";
import PasswordField from "../common/PasswordField";

const ChangeNewPassword = () => {
  const [ConfirmCode, setConfirmCode] = useState("");
  const [ErrorConfirmCode, setErrorConfirmCode] = useState("");
  const [ErrorConfirmCodeState, setErrorConfirmCodeState] = useState(false);
  const [NewConfirmNewPassword, setNewConfirmNewPassword] = useState("");
  const [ErrorNewConfirmNewPassword, setErrorNewConfirmNewPassword] =
    useState("");
  const [ErrorNewConfirmNewPasswordState, setErrorNewConfirmNewPasswordState] =
    useState(false);
  const [NewPassword, setNewPassword] = useState("");
  const [ErrorNewPassword, setErrorNewPassword] = useState("");
  const [ErrorNewPasswordState, setErrorNewPasswordState] = useState(false);
  return (
    <section className="w-6/12  mx-auto my-24 rounded-3xl border-2 border-grey">
      <div className="w-2/3  mx-auto py-28">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-black text-3xl">Recover Password</h2>
            <p className="text-black">
              Enter the code sent to your mail for verification
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <Field
              id="ConfirmCode"
              name="Confirm Code"
              placeholder="Enter Confirmation Code Here"
              type="text"
              setstate={(e) => setConfirmCode(e)}
              error="This id comming from the fetch response error"
              errorState={ErrorConfirmCodeState}
            />
            <PasswordField
              id="NewPassword"
              name="Password"
              placeholder="Enter your new password"
              setstate={(e) => setNewPassword(e)}
              error="This id comming from the fetch response error"
              errorState={ErrorNewPasswordState}
            />
            <PasswordField
              id="ConfirmNewPassword"
              name="Confirm Password"
              placeholder="Enter your password again"
              setstate={(e) => setNewConfirmNewPassword(e)}
              error="This id comming from the fetch response error"
              errorState={ErrorNewConfirmNewPasswordState}
            />

            <Link
              href="/sucess_change_password"
              className="w-full"
              style={{ width: "100%" }}
            >
              <span
                className="text-white bg-main_projcolor font-body_text font-semibold  rounded-full text-center block  py-4  hover:bg-btn_colorh w-full"
                style={{ width: "100%" }}
                aria-label="login to dashboard"
              >
                Change Password
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangeNewPassword;
