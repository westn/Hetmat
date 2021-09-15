import { ReactNode } from "react";
import { Header, Footer } from "../organisms";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
