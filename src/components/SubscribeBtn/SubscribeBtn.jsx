"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./SubscribeBtn.module.scss";
import Link from "next/link";
import EmailJson from "./email.json";
import { Player } from "@lottiefiles/react-lottie-player";
import useHover from "@/hooks/useHover";
const SubscribeBtn = ({
  handleHoverEnter = (f) => () => f(),
  handleHoverLeave = (f) => () => f(),
}) => {
  const [send, setSend] = useState(false);
  const {isHovered, handleMouseEnter, handleMouseLeave} = useHover();
  const emailRef = useRef();
  useEffect(() => {
    if (send) {
      setTimeout(() => {
        setSend(false);
      }, 1500);
    }
  }, [send]);
  useEffect(() => {
    
    if (isHovered) {
      emailRef?.current?.play();
    } else {
      emailRef?.current?.stop();
    }
  }, [isHovered]);
  return (
    <Link
      href={"mailto:example@example.com"}
      className={styles.linkSubs}
      onClick={() => setSend(true)}
    >
      <span>Schreiben Sie uns eine E-Mail.</span>
      <div
        className={send ? styles.send : ""}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Player
          src={EmailJson}
          ref={emailRef}
          autoplay={false}
          // loop={true}
          keepLastFrame={true}
          controls={true}
          style={{ width: "40px" }}
        ></Player>
      </div>
    </Link>
  );
};

export default SubscribeBtn;
