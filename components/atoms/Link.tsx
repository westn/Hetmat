/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, ReactNode } from "react";
import NextLink from "next/link";

interface IProps {
  href: string;
  children: ReactNode;
}

const Link: FC<IProps> = ({ href, children }: IProps) => {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
