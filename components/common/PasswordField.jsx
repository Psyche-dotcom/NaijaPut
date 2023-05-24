import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@material-ui/icons";

const PasswordField = ({
  id,
  type,
  placeholder,
  setstate,
  error,
  errorState,
  name,
}) => {
  const [ShowPassword, setShowPassword] = useState(true);
  let showPassTrue = () => {
    setShowPassword(true);
  };
  return (
    <div className="w-full flex flex-col gap-3">
      <span className="text-black">{name}</span>
      <div className="w-full relative">
        <input
          name={id}
          placeholder={placeholder}
          id={id}
          type={ShowPassword ? "text" : "password"}
          className="w-full p-4 border border-grey rounded-xl focus:border-main_projcolor"
          onChange={(e) => setstate(e.target.value)}
        />
        {ShowPassword ? (
          <VisibilityIcon
            className="absolute top-4 right-4 cursor-pointer text-grey"
            onClick={() => {
              setShowPassword(false);
            }}
          />
        ) : (
          <VisibilityOff
            className="absolute top-4 right-4 cursor-pointer text-grey"
            onClick={showPassTrue}
          />
        )}
      </div>

      {errorState && <p className="errorMessage text-sm text-red">{error}</p>}
    </div>
  );
};

export default PasswordField;
