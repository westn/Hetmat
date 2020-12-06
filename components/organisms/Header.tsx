import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="text-center py-3">
      <Link href="/">
        <h1 className="text-4xl cursor-pointer hover:text-gray-700">Hetmat</h1>
      </Link>
    </header>
  );
};

export default Header;
