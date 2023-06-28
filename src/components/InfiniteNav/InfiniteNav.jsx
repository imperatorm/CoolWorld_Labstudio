"use client";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./InfiniteNav.module.scss";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { TitleAnimationItem } from "../TitleAnimation/TitleAnimation";
import useHover from "@/hooks/useHover";
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
  const [isHovered, handleMouseEnter, handleMouseLeave] = useHover();
  return (
    <>
      <div className={styles.menuToggleWrap}>
        <div className={styles.menuToggle} onClick={handleActive}>
          <span>MENU</span>
          <span onClick={handleActive} onMouseEnter={handleMouseEnter}>
            <GrClose onClick={handleActive} />
          </span>
        </div>
      </div>
      <ul className={styles.menuItems}>
        <TitleAnimationItem>
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
        </TitleAnimationItem>
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
