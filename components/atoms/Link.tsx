/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactNode } from "react";
import NextLink from "next/link";

interface IProps {
  href: string;
  className?: string;
  dataTest?: string;
  children: ReactNode;
}

const Link = function Link({
  href,
  children,
  className,
  dataTest,
}: IProps): JSX.Element {
  return (
    <NextLink href={href}>
      <a className={className} data-testid={dataTest}>
        {children}
      </a>
    </NextLink>
  );
};

Link.defaultProps = {
  className: undefined,
  dataTest: undefined,
};

export default Link;
