import { Link } from "../atoms";

const Header = function Header(): JSX.Element {
  return (
    <header className="text-center py-3">
      <h1 className="text-4xl">
        <Link href="/">
          <span className="cursor-pointer hover:text-gray-700">Hetmat</span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
