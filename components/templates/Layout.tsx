import { ReactNode } from "react";
import { Header, Footer } from "../organisms";

interface IProps {
  children: ReactNode;
}

const Layout = function Layout({ children }: IProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
