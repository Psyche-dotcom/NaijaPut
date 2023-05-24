import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import StepsComp from "../common/StepsComp";
const Steps = () => {
  return (
    <section className="w-11/12 md:w-10/12  mx-auto pb-24">
      <div className="flex flex-col gap-9">
        <h1 className=" font-semibold text-2xl text-center">
          Invest with Naija Put is always easier. <br /> Get started in 3 step
        </h1>
        <div className=" flex gap-5 justify-between">
          <StepsComp
            Icon={PermIdentityIcon}
            title="Create an account"
            sub_title="Click on “earn your pay” enter the code when prompted. Fill in your name, email, and password, then verify your email address. Your account is now ready to use."
          />
          <StepsComp
            Icon={AccountBalanceIcon}
            title="Fund your account"
            sub_title="To fund your account at our office, please visit during business hours and bring payment in the accepted form. Once payment is received, your account will be credited accordingly."
          />
          <StepsComp
            Icon={AccountBalanceWalletIcon}
            title="Start investing"
            sub_title="After funding your account and creating an account on our website,  follow the prompts to make your investments. Monitor your investments and adjust as necessary."
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
