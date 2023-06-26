"use client";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./InfiniteNav.module.scss";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
const InfiniteLoop = ({ text }) => (
  <span className={styles.menuItemAnim}>
    <span className={styles.menuItemAnimRail}>
      <span className={styles.menuItemAnimWrap}>
        <span className={styles.menuItemAnimWrapItem}>{text}</span>
        <span className={styles.menuItemAnimWrapItem}>{text}</span>
        <span className={styles.menuItemAnimWrapItem}>{text}</span>
      </span>
      <span className={styles.menuItemAnimWrap}>
        <span className={styles.menuItemAnimWrapItem}>{text}</span>
        <span className={styles.menuItemAnimWrapItem}>{text}</span>
        <span className={styles.menuItemAnimWrapItem}>{text}</span>
      </span>
    </span>
  </span>
);

const InfiniteNav = ({ links, handleActive }) => {
  const pathname = usePathname();
  return (
    <>
      <div className={styles.menuToggleWrap}>
        <div className={styles.menuToggle} onClick={handleActive}>
          <span>MENU</span>
          <span onClick={handleActive}>
            <GrClose onClick={handleActive} />
          </span>
        </div>
      </div>
      <ul className={styles.menuItems}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li className={styles.menuItem} key={link.id}>
              <Link
                href={link.href}
                key={link.id}
                className={isActive ? "active" : ""}
              >
                <span>{link.title}</span>
                <InfiniteLoop text={link.title} />
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className={styles.menuSocial}>
        <li>
          <Link href={"https://www.facebook.com/"} target="_blank">
            Facebook
          </Link>
        </li>

        <li>
          <Link href={"https://www.instagram.com/"} target="_blank">
            Instagram
          </Link>
        </li>
      </ul>
    </>
  );
};
export default InfiniteNav;
