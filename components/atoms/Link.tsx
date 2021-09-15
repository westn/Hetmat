/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactNode } from "react";
import NextLink from "next/link";

interface IProps {
  href: string;
  className?: string;
  dataTest?: string;
  children: ReactNode;
}

const Link = ({ href, children, className, dataTest }: IProps): JSX.Element => (
  <NextLink href={href}>
    <a className={className} data-test={dataTest}>
      {children}
    </a>
  </NextLink>
);

Link.defaultProps = {
  className: undefined,
  dataTest: undefined,
};

export default Link;
