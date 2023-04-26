import { PropsWithChildren } from "react";
import NextLink, { LinkProps } from "next/link";
import styles from "./Link.module.css";

const Link = ({ children, href }: LinkProps & PropsWithChildren) => (
  <NextLink href={href} className={styles.link}>
    {children}
  </NextLink>
);

export default Link;
