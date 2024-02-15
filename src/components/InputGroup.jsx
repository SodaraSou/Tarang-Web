import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

function InputGroup({
  title,
  type,
  placeholder,
  id,
  onChange,
  value,
  disable,
}) {
  const isPasswordInput = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm md:text-lg font-semibold">
        {title}
      </label>
      <div className="relative flex">
        <input
          type={isPasswordInput && showPassword ? "text" : type}
          placeholder={isPasswordInput && showPassword ? type : placeholder}
          id={id}
          onChange={onChange}
          value={value}
          required={isPasswordInput}
          disabled={disable}
          className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:ring focus:border-[#5E17EB]"
        />
        {isPasswordInput && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-[10px] right-3"
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputGroup;
