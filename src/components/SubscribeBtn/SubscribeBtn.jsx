import React from 'react'
import {GoMail} from "react-icons/go"
import styles from "./SubscribeBtn.module.scss";
import Link from 'next/link';
const SubscribeBtn = () => {
  return (
    <div className={styles.linkWrap}>
      <Link href={""} className={styles.linkSubs}>
        <span>Schreiben Sie uns eine E-Mail.</span>
        <GoMail />
      </Link>
    </div>
  );
}

export default SubscribeBtn