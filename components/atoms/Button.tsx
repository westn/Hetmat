import { ReactNode } from "react";

const Button: ReactNode = function Button() {
  return (
    <button
      type="button"
      className="rounded flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 w-full justify-center uppercase"
    >
      Default
    </button>
  );
};

export default Button;
