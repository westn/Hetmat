/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, ReactNode } from "react";
import NextLink from "next/link";

interface IProps {
  href: string;
  className?: string;
  children: ReactNode;
}

const Link: FC<IProps> = ({ href, children, className }: IProps) => {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

Link.defaultProps = {
  className: undefined,
};

export default Link;
