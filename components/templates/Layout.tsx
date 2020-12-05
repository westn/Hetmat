import { FC, ReactNode } from "react";
import { Header } from "../organisms";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }: IProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
