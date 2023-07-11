"use client";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./InfiniteNav.module.scss";
import Link from "next/link";
import { TitleAnimationItem } from "../TitleAnimation/TitleAnimation";
import useHover from "@/hooks/useHover";
import { Player } from "@lottiefiles/react-lottie-player";
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
  const closeRef = useRef()
  useEffect(()=> {
    if(isHovered) {
      closeRef?.current?.play()
    } else {
      closeRef?.current?.stop();
    }
  },[isHovered])
  return (
    <>
      <div className={styles.menuToggleWrap}>
        <div className={styles.menuToggle}>
          <span>MENU</span>
          <div
            className={styles.closeWrap}
            onClick={handleActive}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* <GrClose onClick={handleActive} /> */}
            <Player
              src={
                "https://assets8.lottiefiles.com/packages/lf20_VlE3maFSHI.json"
              }
              onClick={handleActive}
              ref={closeRef}
              autoplay={false}
              // loop={true}
              keepLastFrame={true}
              controls={true}
              style={{ width: "38px", height: "38px",    transform:" rotate(45deg)" }}
            ></Player>
          </div>
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
                  <p className={styles.wrapAnim}>
                    <InfiniteLoop text={link.title} />
                  </p>

                  
                </Link>
              </li>
            );
          })}
        </TitleAnimationItem>
      </ul>
      <ul className={styles.menuSocial}>
        <TitleAnimationItem>
          <li className={styles.firstSocialItem}>
            <Link href={"https://www.facebook.com/"} target="_blank">
              Facebook
            </Link>
          </li>
          <hr />
          <li>
            <Link href={"https://www.instagram.com/"} target="_blank">
              Instagram
            </Link>
          </li>
        </TitleAnimationItem>
      </ul>
    </>
  );
};
export default InfiniteNav;
